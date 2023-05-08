import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadimgOrdComponent } from './uploadimg-ord.component';

describe('UploadimgOrdComponent', () => {
  let component: UploadimgOrdComponent;
  let fixture: ComponentFixture<UploadimgOrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadimgOrdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadimgOrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
