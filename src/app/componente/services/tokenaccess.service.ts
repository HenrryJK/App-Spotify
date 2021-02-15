import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Token } from '../models/token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenaccessService {
  private _token : Token;

  constructor(private http:HttpClient) {


   }
   accesoToken(token:Token){
    const url = 'https://accounts.spotify.com/api/token';
    let params = new URLSearchParams();
    params.set('grant_type' , 'client_credentials');
    params.set('client_id' , token.client_id );
    params.set('client_secret' , token.client_secret);
    console.log(token.client_id);
    console.log(token.client_secret);

    return this.http.post(url , params.toString());
   }
}
