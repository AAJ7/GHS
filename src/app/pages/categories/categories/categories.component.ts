import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/core/services/categories/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  Categories:any[] = [];
  SearchCategories:any[] = [];
  temp:any[] = [];

  constructor(
    private CategoriesService: CategoriesService,
    private router: Router) { }
  ngOnInit(): void {
    this.categories();
  }
  categories() {
    this.Categories = [];
    this.CategoriesService.show().subscribe({
      next:(response)=> {
        this.Categories = response?.data?.categories;
        this.SearchCategories = response?.data?.categories;
      }
    });
  }
  haveSubCategories(id:number , number: number) {
    if(number) {
      this.router.navigate(["categories/" + id + "/sub-categories"]);
    } else {
      this.router.navigate(["categories/" + id + "/companies"]);
    }
  }
  search(val: any) {
    if(!val && val === "") {
      this.categories();
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
