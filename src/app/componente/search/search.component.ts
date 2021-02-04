import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading: boolean;
  constructor(private spotify:SpotifyService) { }

  search(termino:string){

    console.log(termino);
    this.loading=true;
    this.spotify.getArtist(termino)
    .subscribe((data: any) =>{
      console.log(data);
      this.artistas = data;
      this.loading=false;

    });
  }


  ngOnInit(): void {
  }

}
