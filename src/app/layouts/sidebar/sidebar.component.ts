import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { SidebarService } from 'src/app/shared/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    public SidebarService: SidebarService,
    private translateService: TranslateService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit() {}

  changeLanguage(lang: string) {
    this.localStorageService.setLocalStorage('lang', lang);
    window.location.reload();
  }

  get currentLang(): string {
    return this.translateService.getDefaultLang();
  }
}
