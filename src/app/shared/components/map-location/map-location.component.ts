import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-map-location',
  templateUrl: './map-location.component.html',
  styleUrls: ['./map-location.component.scss']
})
export class MapLocationComponent implements OnInit {
  marker!: marker;

  constructor() {}

  ngOnInit() {
    //set current position
    this.setCurrentPosition();
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.marker = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          draggable: true,
          zoom: 12
        };
      });
    }
  }


  mapClicked($event: any) {
    this.marker = {
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      zoom: 12
    };
  }
}

interface marker {
	lat: any;
	lng: any;
	draggable: any;
	zoom: any;
}
