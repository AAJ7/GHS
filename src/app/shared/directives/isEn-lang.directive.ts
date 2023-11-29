import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Directive({
  selector: '[appIsEnLang]'
})
export class IsEnLangDirective implements OnInit {

  constructor(
    private translateService: TranslateService,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    if (this.translateService.getDefaultLang() === 'en') {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

}
