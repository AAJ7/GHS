import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private HttpClient:HttpClient) { }

  get():Observable<any> {
    return this.HttpClient.get<any>("about_us_page");
  }
}
