import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { SidebarService } from './shared/services/sidebar.service';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from './core/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('progressBar') progressBar: any;

  constructor(
    private router: Router,
    public SidebarService: SidebarService,
    private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    private localStorageService: LocalStorageService,
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.progressBar.start();
      }
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        const appMain: any = document.querySelector('.theApp-main');
        if (!url.includes('/offer') && !url.includes('/map')) {
          appMain.classList.add('theApp-main-background');
        } else {
          appMain.classList.remove('theApp-main-background');
        }
        setTimeout(() => {
          this.progressBar.complete();
        }, 400);
      }
    });

    this.initializeApp();
  }

  private initializeApp(): void {
    const lang = this.localStorageService.getLocalStorage('lang') || 'en';
    this.translateService.setDefaultLang(lang);
    this.document.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

}
