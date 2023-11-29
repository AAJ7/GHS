import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesCompaniesProductsComponent } from './categories-companies-products.component';

describe('CategoriesCompaniesProductsComponent', () => {
  let component: CategoriesCompaniesProductsComponent;
  let fixture: ComponentFixture<CategoriesCompaniesProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesCompaniesProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesCompaniesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
