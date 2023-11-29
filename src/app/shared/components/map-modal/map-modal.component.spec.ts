/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapModalComponent } from './map-modal.component';

describe('MapModalComponent', () => {
  let component: MapModalComponent;
  let fixture: ComponentFixture<MapModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
