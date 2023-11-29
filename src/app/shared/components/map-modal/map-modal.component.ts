import { MapsAPILoader } from '@agm/core';
import { Component, ElementRef, OnInit, ViewChild, NgZone, Input, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss']
})
export class MapModalComponent implements OnInit {
  public searchControl!: FormControl;
  marker!: marker;

  @ViewChild("search") public searchElementRef!: ElementRef;

  @Input() showMap: boolean = false;
  @Output() hideModal = new EventEmitter<boolean>();

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place = autocomplete.getPlace();
          console.log(place);
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.marker = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
	          draggable: true,
            zoom: 12
          };
        });
      });
    });
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
        console.log(this.marker);
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

  close() {
    this.hideModal.emit(false);
    this.showMap = false;
  }

}

interface marker {
	lat: any;
	lng: any;
	draggable: any;
	zoom: any;
}
