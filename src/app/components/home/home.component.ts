import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  Sounds: any[] = [];
  loading: boolean;

  error: boolean;
  messageError: string;

  constructor(private spotify: SpotifyService ) {
    this.loading = true;
    this.error =false;

    this.spotify.getNewReleases()
    .subscribe((data: any) =>{
      this.Sounds = data;
      this.loading = false;
    },(errorService)=>{
      this.error = true
      this.loading = false;
      this.messageError = errorService.error.error.message
    });

  }


}
