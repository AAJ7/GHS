import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { CategoriesSubCategoriesService } from 'src/app/core/services/categories/categories-sub-categories/categories-sub-categories.service';
import { CategoriesService } from 'src/app/core/services/categories/categories/categories.service';



@Component({
  selector: 'app-categories-sub-categories',
  templateUrl: './categories-sub-categories.component.html',
  styleUrls: ['./categories-sub-categories.component.scss']
})
export class CategoriesSubCategoriesComponent implements OnInit {

  parent_id : string | null = null;
  Categories :any[] = [];
  SearchCategories :any[] = [];
  temp : any[] = [];
  title: string= "";
  constructor (
    private ActivatedRoute: ActivatedRoute,
    private CSCS: CategoriesSubCategoriesService,
    private router: Router,
    private CategoriesService: CategoriesService) {

  }
  ngOnInit(): void {
    this.parent_id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.getCategoryName(this.parent_id);
    this.categories(this.parent_id);
  }
  getCategoryName(id: any) {
    this.CategoriesService.show().subscribe({
      next:(response)=> {
        for(let i = 0; i < response?.data?.categories.length; ++i) {
          if(response?.data?.categories[i]?.id == id) {
            this.title = response?.data?.categories[i]?.name_en;
          }
        }
      }
    });
  }
  categories(id: any) {
    this.CSCS.show(id).subscribe({
      next:(response)=> {
        this.Categories = response?.data?.categories;
        this.SearchCategories = response?.data?.categories;
      }
    });
  }
  haveSubCategories(id:number , number: number) {
    if(number) {
      this.categories(id);
    } else {
      let subCategoryName = "";
      for(let i = 0; i < this.SearchCategories.length; ++i) {
        if(this.SearchCategories[i]?.id == id) {
          subCategoryName = this.SearchCategories[i].name_en;
        }
      }
      let subCategory = {
        id: id,
        name: subCategoryName,
        parent: this.parent_id
      };
      localStorage.setItem("SubCategory", JSON.stringify(subCategory));
      this.router.navigate(["categories/" + this.parent_id + "/sub-categories/" + id + "/companies"]);
    }
  }
  search(val: any) {
    if(!val && val === "") {
      this.categories(this.parent_id);
    }
    if (val && val != '') {
      this.Categories = this.SearchCategories;
      for(let i = 0; i < this.Categories.length; ++i) {
        if (this.Categories[i].name_en.toLowerCase().includes(val.trim().toLowerCase())) {
            this.temp.push(this.Categories[i]);
        }
      }
      this.Categories = this.temp;
      this.temp = [];
    }
  }
}
