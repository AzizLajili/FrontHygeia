import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharamciedetailComponent } from './pharamciedetail.component';

describe('PharamciedetailComponent', () => {
  let component: PharamciedetailComponent;
  let fixture: ComponentFixture<PharamciedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharamciedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharamciedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
