
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  canciones:any[] = [];

  loading: boolean;
  error : boolean;
  mensajeError: string;
  constructor(private spotify:SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewAlbum()
    .subscribe( (data:any) => {

      this.canciones=data;
      this.loading = false;
      //caso contrario vota un error
    } , (errorServicio) => {
      this.error=true;
      console.log(errorServicio);
     this.mensajeError = errorServicio.error.error.message;
    });
  }




  ngOnInit(): void {
  }

}
