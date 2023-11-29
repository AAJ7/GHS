import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavbarService } from 'src/app/core/services/navbar/navbar.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  whatsAppLink: string = "";
  facebookLink: string = "";
  instgramLink: string = "";
  phoneNumber: string = "";
  twitterLink: string = "";
  title: string = "";
  content: string = "";

  constructor(private Navbar: NavbarService,
    private NgxSpinner: NgxSpinnerService,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.navbar();
  }

  navbar() {
    this.NgxSpinner.show();
    this.Navbar.get().subscribe({
      next:(response)=> {
        if(this.document.dir == "ltr") {
          this.title = response?.data?.navbar_footer?.footer_title_en;
          this.content = response?.data?.navbar_footer?.footer_content_en;
        }
        else if (this.document.dir == "rtl") {
          this.title = response?.data?.navbar_footer?.footer_title_ar;
          this.content = response?.data?.navbar_footer?.footer_content_ar;
        }
        this.whatsAppLink = response?.data?.navbar_footer?.whatsapp_number;
        this.facebookLink = response?.data?.navbar_footer?.facebook_link;
        this.instgramLink = response?.data?.navbar_footer?.instagram_link;
        this.twitterLink = response?.data?.navbar_footer?.twitter_link;
        this.phoneNumber = response?.data?.navbar_footer?.phone_number;
        this.NgxSpinner.hide();
      }
    });
  }
}
