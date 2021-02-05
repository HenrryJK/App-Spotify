import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {

   }

   getQuery(query : string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBx_e4AS6geqdCxQrJydqQOBBz_Lu5vs5y_V35_hv3uY-YSGQoSj3pCHFXmwxnqQizl7HgsV6GXKDzVTlg'
  });
    return this.http.get(url , {headers});
   }


   getNewAlbum(){
  /*  const headers = new HttpHeaders({
        'Authorization' : 'Bearer BQBT0t1oy4cqEUiWVjRWOcBG6FcwNAfRqa8y5QkZK3Rcmn9HAhrmO_oi8Q_Gan0WhBoGekyvmkSiPG-olEw'
    });*/

   return  this.getQuery('browse/new-releases')
    .pipe(map (data => {
      return data['albums'].items;
   }));
   // this.http.get('https://api.spotify.com/v1/browse/new-releases' , {headers})

  }

  getArtists(termino:string){
 return   this.getQuery(`search?q=${termino}&type=artist&limit=30`)
 .pipe( map ( data => {
    return data['artists'].items;
  }));
  }

  getArtist(id:string){
    return   this.getQuery(`artists/${id}`);
   /*.pipe( map ( data => {
       return data['artists'].items;
     }));*/
     }


     getTopTrack (id:string){
       // la razon por la que usa getGuery es para poder centralizar todas las peticiones que se haga es como si fuera un global que tiene todas las
       //peticiones al mismo servicio
      return   this.getQuery(`artists/${id}/top-tracks?market=us`)
      .pipe( map ( data => {
        return data['tracks'];
      }));
       }

}
