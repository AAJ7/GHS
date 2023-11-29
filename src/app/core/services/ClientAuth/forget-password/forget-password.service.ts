import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  constructor(private HttpClient:HttpClient) { }

  get(data: any) {
    return this.HttpClient.get<any>("client/send_password_reset_token/" + data.email);
  }
}
