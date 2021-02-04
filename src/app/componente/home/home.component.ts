
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

  constructor(private spotify:SpotifyService) {
    this.loading = true;
    this.spotify.getNewAlbum()
    .subscribe( (data:any) => {

      this.canciones=data;
      this.loading = false;
    });
  }




  ngOnInit(): void {
  }

}
