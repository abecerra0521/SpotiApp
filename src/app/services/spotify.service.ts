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
      'Authorization' : "Bearer BQCz2WjOHrxbPsa2ShtovPr2KwXsibL4BrdA4tpBR6fwjd1UeS36O8iPxGXkIwrh-WoFM64na1ZEV5DDMdw",
    })

    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20').pipe(map(data => data['albums'].items));
  }

  getArtist(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
  }

  getArtistById(id:string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=MX`).pipe(map(data => data['tracks']));
  }

}
