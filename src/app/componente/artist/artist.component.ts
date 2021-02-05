import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  //inicializo con un objeto vacio
artista: any = {};
loadingArtist : boolean;
  constructor(private router : ActivatedRoute , private spotify: SpotifyService) {

    this.loadingArtist= true;
    this.router.params.subscribe(params =>{
    //  console.log(params['id']);
      this.getArtist(params['id']);
    });
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

}
