import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('Spotify service listo!!!!!!!');
   }

   getNewAlbum(){
    const headers = new HttpHeaders({
        'Authorization' : 'Bearer BQBT0t1oy4cqEUiWVjRWOcBG6FcwNAfRqa8y5QkZK3Rcmn9HAhrmO_oi8Q_Gan0WhBoGekyvmkSiPG-olEw'
    });

   return  this.http.get('https://api.spotify.com/v1/browse/new-releases' , {headers})
   .pipe(map (data => {
      return data['albums'].items;
   }));
  }


  getArtist(termino:string){
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBT0t1oy4cqEUiWVjRWOcBG6FcwNAfRqa8y5QkZK3Rcmn9HAhrmO_oi8Q_Gan0WhBoGekyvmkSiPG-olEw'
  });

 return  this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=10` , {headers})
  .pipe( map ( data => {
    return data['artists'].items;
  }));
  }
}
