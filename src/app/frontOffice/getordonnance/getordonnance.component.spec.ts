import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetordonnanceComponent } from './getordonnance.component';

describe('GetordonnanceComponent', () => {
  let component: GetordonnanceComponent;
  let fixture: ComponentFixture<GetordonnanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetordonnanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetordonnanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
