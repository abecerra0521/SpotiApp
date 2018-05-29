import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  constructor(private router : ActivatedRoute,
              private spotify: SpotifyService
  ) {
    this.router.params.subscribe((params : any) => {
      this.getArtist(params['id']);
    })

  }

  getArtist(id: string){
    this.spotify.getArtistById(id)
    .subscribe((data: any) =>{
      console.log(data)
    });
  }



}
