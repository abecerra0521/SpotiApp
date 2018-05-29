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
      'Authorization' : "Bearer BQBwx5NBYu2Sew3aX7lCX__o3OSViskgUVWhb-Njawp-2sWachw9_Zy0Tqpejue6zRDxi9DbLF1RhGO6J5E",
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

}
