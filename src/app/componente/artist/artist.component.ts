import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import { SpotifyService } from '../services/spotify.service';
import { TokenaccessService } from '../services/tokenaccess.service';
import { Token } from '../models/token';
import { url } from 'inspector';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  //inicializo con un objeto vacio
artista: any = {};
topTracks: any[] = [];
loadingArtist : boolean;
tokens:Token;
  constructor(private router : ActivatedRoute , private spotify: SpotifyService , private token:TokenaccessService) {

    this.loadingArtist= true;
    this.router.params.subscribe(params =>{
    //  console.log(params['id']);
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });

   this.tokens = new Token();

   }

  getToken (url:string) {
      this.token.accesoToken(this.tokens).subscribe(response => {
        console.log(response);
      });
//  lo estoy llamando
      console.log('Mandando token !');
  }
   getArtist(id:string) {
    this.loadingArtist= true;

    this.spotify.getArtist(id)
    .subscribe (artista =>{
      console.log(artista);
      this.artista = artista;
      this.loadingArtist= false;
    });
   }

   getTopTracks (id:string) {
     this.spotify.getTopTrack(id )
     .subscribe(topTracks => {
       console.log(topTracks);
       this.topTracks = topTracks;
     })
   }


}
