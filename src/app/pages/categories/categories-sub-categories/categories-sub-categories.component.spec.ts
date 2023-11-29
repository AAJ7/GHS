import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesSubCategoriesComponent } from './categories-sub-categories.component';

describe('CategoriesSubCategoriesComponent', () => {
  let component: CategoriesSubCategoriesComponent;
  let fixture: ComponentFixture<CategoriesSubCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesSubCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesSubCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
