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
      'Authorization' : "Bearer BQBiR9gej9PEb0KAjGatdORCuKjfO3p-6Ms6xGSsDt3lY-R_UudPlekdOo7OR87b62Rg3S-ioSk8e7SyYQM",
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
