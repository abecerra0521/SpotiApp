import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) {

  }

  getQuery(query : string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization' : "Bearer BQAGqb2TC1ZhN6uREwmEz4Kto0VYCK_Qgmgp37yOdY4IDQJAZ9C2o9GKfWrsMwJDs_D4QfmuOVOooSMI18c",
    })

    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20').pipe(map(data => data['albums'].items));
  }

  getArtist(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
  }

}
