import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  Artists : any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
  }

  search(termino:string){
    this.loading = true;
    this.spotify.getArtist(termino)
      .subscribe((data :  any) => {
        this.Artists = data;
        this.loading = false ;
      })
  }

}
