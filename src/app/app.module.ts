

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LayoutModule } from './layouts/layout.module';
import { SharedModule } from './shared/shared.module';
import { NgProgressModule } from 'ngx-progressbar';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/auth.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    SharedModule,
    HttpClientModule,
    NgProgressModule.withConfig({
      spinnerPosition: 'right',
      color: '#f0faf7',
      thick: false,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxSpinnerModule
  ],
  providers:
  [
    {
      provide: HTTP_INTERCEPTORS ,
      useClass: AuthInterceptor ,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
