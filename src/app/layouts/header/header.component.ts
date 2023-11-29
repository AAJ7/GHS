import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import * as Headroom from 'headroom.js';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { SidebarService } from 'src/app/shared/services/sidebar.service';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  show: boolean = false;
  name: string= "";

  constructor(public SidebarService: SidebarService,
    private LocalStorageService: LocalStorageService,
    private router: Router,
    private Spinner: NgxSpinnerService) {
      router.events.forEach((event) => {
        if(event instanceof NavigationStart) {
          if(event?.url === "/auth/login" || event?.url === "categories" || event?.url === "checkout") {
            this.name = "";
            this.show = false;
          }
          if(event?.url === "/home") {
            this.name = JSON.parse(localStorage.getItem("clientToken")!)?.name;
            this.show = true;
          }
        }
        // NavigationEnd
        // NavigationCancel
        // NavigationError
        // RoutesRecognized
      });
    }

  ngOnInit() {
    this.initHeadRoom();
  }

  initHeadRoom() {
    let myElement: any = document.querySelector('header');
    const headroom = new Headroom(myElement, {
      offset: 50,
      classes: {
        // when element is initialised
        initial: 'theHeader--fixed',
        // when scrolling up
        pinned: 'theHeader--pinned',
        // when scrolling down
        unpinned: 'theHeader--unpinned',
        // when above offset
        top: 'theHeader--top',
        // when below offset
        notTop: 'theHeader--not-top',
        // when at bottom of scoll area
        bottom: 'theHeader--bottom',
        // when not at bottom of scroll area
        notBottom: 'theHeader--not-bottom',
        // when frozen method has been called
        frozen: 'theHeader--frozen',
      },
    });
    headroom.init();
  }
  logOut() {
    this.show = false;
    if(!this.show) {
      // this.LocalStorageService.BS.next(false);
      localStorage.removeItem("clientToken");
      this.router.navigateByUrl("/auth", { replaceUrl: true });
    }
  }
}
