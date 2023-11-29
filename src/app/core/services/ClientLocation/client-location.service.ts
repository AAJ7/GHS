import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientLocationService {

  constructor(private HttpClient:HttpClient) { }

  get(): Observable<any> {
    return this.HttpClient.get<any>("client_location");
  }

  postCreate(data: any): Observable<any> {
    const formData = new FormData();
    formData.append("client_id" , data.client_id);
    formData.append("lat" , data.lat);
    formData.append("long" , data.long);
    formData.append("phone_number" , data.phone_number);
    formData.append("location_type" , data.location_type);
    formData.append("street" , data.street);
    formData.append("building" , data.building);
    formData.append("floor" , data.floor);
    formData.append("floor" , data.floor);
    if(data.additional_instructions)formData.append("additional_instructions" , data.additional_instructions);
    if(data.additional_instructions)formData.append("telephone" , data.telephone);
    return this.HttpClient.post<any>("client/register" , formData);
  }
  postUpdate(data: any): Observable<any> {
    const formData = new FormData();
    formData.append("client_id" , data.client_id);
    formData.append("lat" , data.lat);
    formData.append("long" , data.long);
    formData.append("phone_number" , data.phone_number);
    formData.append("location_type" , data.location_type);
    formData.append("street" , data.street);
    formData.append("building" , data.building);
    formData.append("floor" , data.floor);
    formData.append("floor" , data.floor);
    formData.append("additional_instructions" , data.additional_instructions);
    formData.append("telephone" , data.telephone);
    return this.HttpClient.post<any>("client/register" , formData);
  }
}
