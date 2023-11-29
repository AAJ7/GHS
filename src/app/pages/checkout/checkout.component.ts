import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { FormControl , FormGroup, Validators } from '@angular/forms';
import { ClientLocationService } from 'src/app/core/services/ClientLocation/client-location.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  showMap: boolean = false;
  openModal: boolean = false;
  markers: any[] = [];
  clientLocation:FormGroup = new FormGroup({
    client_id               : new FormControl(null , [Validators.required]),
    lat                     : new FormControl(null , [Validators.required]),
    long                    : new FormControl(null , [Validators.required]),
    phone_number            : new FormControl(null , [Validators.required]),
    location_type           : new FormControl(null , [Validators.required]),
    street                  : new FormControl(null , [Validators.required]),
    building                : new FormControl(null , [Validators.required]),
    floor                   : new FormControl(null , [Validators.required]),
    apartment               : new FormControl(null , [Validators.required]),
    detailed_address        : new FormControl(null , [Validators.required]),
    additional_instructions : new FormControl(null , [Validators.required]),
    telephone               : new FormControl(null , [Validators.required])
  });

  constructor(  private LocalStorageService: LocalStorageService,
    private ClientLocation: ClientLocationService) { }

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem("clientToken")!));
    this.ClientLocation.get()
    // if(JSON.parse(localStorage.getItem("clientToken")!)?.token && JSON.parse(localStorage.getItem("clientToken")!)) {
    //   this.LocalStorageService.BS.next(true);
    // }
  }

  close() {
    this.openModal = false;
  }

  Map() {
    this.showMap = !this.showMap;
  }

  mapClick(event: any) {
    this.markers.push(event?.coords);
  }

  locationType(str: string) {
    console.log(str);
  }
}
