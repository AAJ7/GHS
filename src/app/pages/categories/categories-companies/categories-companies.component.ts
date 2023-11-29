import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { CategoriesCompaniesService } from 'src/app/core/services/categories/categories-companies/categories-companies.service';


@Component({
  selector: 'app-categories-companies',
  templateUrl: './categories-companies.component.html',
  styleUrls: ['./categories-companies.component.scss']
})
export class CategoriesCompaniesComponent implements OnInit {

  subCategoryID: string | null = null;
  Companies: any[] = [];
  SearchCompanies: any[] = [];
  temp :any[] = [];
  title: string= "";
  rateCount!:any;
  constructor(private CCS: CategoriesCompaniesService , private ActivatedRoute: ActivatedRoute ,  private router: Router) {}
  ngOnInit(): void {
    this.title = (JSON.parse(localStorage.getItem("SubCategory")!))?.name;
    localStorage.clear();
    this.subCategoryID = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.companies(this.subCategoryID);
  }
  companies(id: any) {
    this.Companies = [];
    this.CCS.show(id).subscribe({
      next:(response)=> {
        this.Companies = response?.data;
        this.SearchCompanies = response?.data;
      }
    });
  }

  search(val: any) {
    if(!val && val === "") {
      this.companies(this.subCategoryID);
    }
    if (val && val != '') {
      this.Companies = this.SearchCompanies;
      for(let i = 0; i < this.Companies.length; ++i) {
        if (this.Companies[i].name_ar.toLowerCase().includes(val.trim().toLowerCase())) {
            this.temp.push(this.Companies[i]);
        }
      }
      this.Companies = this.temp;
      this.temp = [];
    }
  }
  onRatingSet(rate: any) {
    this.rateCount = rate;
  }
  products(category_id: number , company_id: number , name: string) {
    let company = {
      category_id: category_id,
      company_id: company_id,
      parent_id: (JSON.parse(localStorage.getItem("SubCategory")!))?.parent,
      name: name
    };
    localStorage.setItem("company",JSON.stringify(company));
    this.router.navigate(["categories/" +  (JSON.parse(localStorage.getItem("SubCategory")!))?.parent + "/sub-categories/" + category_id + "/companies/" + company_id + "/products"]);
  }
}
