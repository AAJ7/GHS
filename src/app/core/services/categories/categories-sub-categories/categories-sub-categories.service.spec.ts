import { TestBed } from '@angular/core/testing';

import { CategoriesSubCategoriesService } from './categories-sub-categories.service';

describe('CategoriesSubCategoriesService', () => {
  let service: CategoriesSubCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesSubCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
