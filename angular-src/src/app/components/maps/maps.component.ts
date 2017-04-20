import { Component, OnInit }  from '@angular/core';
import { AgmCoreModule }      from 'angular2-google-maps/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  title: string = 'Company Location';
  lat: number = 54.27858074867338;
  lng: number = -8.459987637880886;

  constructor() { }

  ngOnInit() {
  }

}
