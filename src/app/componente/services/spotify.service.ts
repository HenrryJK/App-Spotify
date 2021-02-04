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
      'Authorization' : 'Bearer BQC62KZLswkEuXwwwIGtwD0VMB07Ymqxsu60zmu_rCXfdTm5fanofHCzig1mgXzR7wFaePJT73daAr7-IUA'
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

  getArtist(termino:string){
   /* const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBT0t1oy4cqEUiWVjRWOcBG6FcwNAfRqa8y5QkZK3Rcmn9HAhrmO_oi8Q_Gan0WhBoGekyvmkSiPG-olEw'
  });*/

 return   this.getQuery(`search?q=${termino}&type=artist&limit=30`)
 .pipe( map ( data => {
    return data['artists'].items;
  }));
// this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=10` , {headers})

  }
}
