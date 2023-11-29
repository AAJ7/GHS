import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private HttpClient:HttpClient) { }

  register(data: any):Observable<any> {
    const formData = new FormData();
    formData.append("email" , data.email);
    formData.append("password" , data.password);
    formData.append("name" , data.name);
    formData.append("phone" , data.phone);
    formData.append("age" , data.age);
    formData.append("address" , data.address);
    formData.append("gender" , data.gender);
    formData.append("country_id" , data.country_id);
    return this.HttpClient.post<any>("client/register" , formData);
  }
}
