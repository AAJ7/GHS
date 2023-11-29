import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedSuccessfullyComponent } from './updated-successfully.component';

describe('UpdatedSuccessfullyComponent', () => {
  let component: UpdatedSuccessfullyComponent;
  let fixture: ComponentFixture<UpdatedSuccessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedSuccessfullyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
