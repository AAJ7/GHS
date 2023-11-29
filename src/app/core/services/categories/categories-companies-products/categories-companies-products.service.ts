import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesCompaniesProductsService {

  constructor(private HttpClient:HttpClient) { }

  show(companyID: number , categoryID: number):Observable<any> {
    return this.HttpClient.get<any>("product?company_id=" + companyID + "&category_id=" + categoryID);
  }
}
