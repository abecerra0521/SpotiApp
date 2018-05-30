import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  Artist: any = {};
  Tracks: any[] = [];
  loading: boolean;


  constructor(private router : ActivatedRoute,
              private spotify: SpotifyService
  ) {
    this.router.params.subscribe((params : any) => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
      this.loading = true;
    })

  }

  getArtist(id: string){
    this.spotify.getArtistById(id)
    .subscribe((data: any) =>{
      console.log(data);
      this.Artist = data;
      this.loading = false ;
    });
  }

  getTopTracks(id : string){
    this.spotify.getTopTracks(id)
    .subscribe(data => {
      console.log(data);
      this.Tracks = data;
    })
  }



}
