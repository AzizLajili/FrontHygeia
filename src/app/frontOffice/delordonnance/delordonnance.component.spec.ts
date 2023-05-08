import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelordonnanceComponent } from './delordonnance.component';

describe('DelordonnanceComponent', () => {
  let component: DelordonnanceComponent;
  let fixture: ComponentFixture<DelordonnanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelordonnanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelordonnanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
