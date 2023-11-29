import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  active: boolean = false;

  constructor() { }

  Toggle() {
    this.active = !this.active;
  }

  Open() {
    this.active = true;
  }

  Close() {
    this.active = false;
  }
  
}
