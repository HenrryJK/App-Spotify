import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('Spotify service listo!!!!!!!');
   }

   getNewAlbum(){
    const headers = new HttpHeaders({
        'Authorization' : 'Bearer BQBJEXUxXAAZUwX2HQaZfSZqwyvmeSgFy0aP1LUvaOJjvvZfJx-vAVJQD0i4H8nIYRW21kGqmCEo5fAH81k'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases' , {headers})
    .subscribe(data => {
      console.log(data);
    });

  }

}
