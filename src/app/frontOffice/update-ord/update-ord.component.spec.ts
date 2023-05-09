import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrdComponent } from './update-ord.component';

describe('UpdateOrdComponent', () => {
  let component: UpdateOrdComponent;
  let fixture: ComponentFixture<UpdateOrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOrdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
