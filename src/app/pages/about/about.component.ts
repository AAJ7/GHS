import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AboutService } from 'src/app/core/services/about/about.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title: string = "";
  content: string = "";
  constructor(private About: AboutService,
    private NgxSpinner: NgxSpinnerService,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.about();
  }

  about() {
    this.NgxSpinner.show();
    this.About.get().subscribe({
      next:(response)=> {
        if(this.document.dir == "ltr") {
          this.title = response?.data?.title_en;
          this.content = response?.data?.content_en;
        } else if(this.document.dir == "rtl") {
          this.title = response?.data?.title_ar;
          this.content = response?.data?.content_ar;
        }
        this.NgxSpinner.hide();
      }
    });
  }
}
