import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesCompaniesProductsService } from 'src/app/core/services/categories/categories-companies-products/categories-companies-products.service';


@Component({
  selector: 'app-categories-companies-products',
  templateUrl: './categories-companies-products.component.html',
  styleUrls: ['./categories-companies-products.component.scss']
})
export class CategoriesCompaniesProductsComponent implements OnInit {

  category_id!: any;
  company_id!: any;
  Products: any[] = [];
  SearchProducts: any[] = [];
  temp :any[] = [];
  title: string= "";
  openModal: boolean = false;
  constructor(private ActivatedRoute: ActivatedRoute , private CCPS: CategoriesCompaniesProductsService) {

  }

  ngOnInit(): void {
    this.title = (JSON.parse(localStorage.getItem("company")!))?.name;
    this.company_id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.category_id = (JSON.parse(localStorage.getItem("company")!))?.category_id;
    this.company_id = (JSON.parse(localStorage.getItem("company")!))?.company_id;

    this.products(this.category_id , this.company_id);
  }
  products(category_id: number , compnay_id: number) {
    this.CCPS.show(category_id , compnay_id).subscribe({
      next:(response)=> {
        console.log(response);
      }
    });
  }
  search(val: any) {
    if(!val && val === "") {
      this.products(this.category_id , this.company_id);
    }
    if (val && val != '') {
      this.Products = this.SearchProducts;
      for(let i = 0; i < this.Products.length; ++i) {
        if (this.Products[i].name_en.toLowerCase().includes(val.trim().toLowerCase())) {
            this.temp.push(this.Products[i]);
        }
      }
      this.Products = this.temp;
      this.temp = [];
    }
  }
}
