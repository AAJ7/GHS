import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesCompaniesService {

  constructor(private HttpClient:HttpClient) { }

  show(id: number):Observable<any> {
    return this.HttpClient.get<any>("category/" + id + "/company");
  }
}
