import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styles: []
})
export class HttpComponent implements OnInit {

  paises: any[] = [];

  constructor(private http: HttpClient) {
    console.log("Constructor del home");
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe((data: any) => {
      this.paises = data;

    });
  }

  ngOnInit() {
  }

}
