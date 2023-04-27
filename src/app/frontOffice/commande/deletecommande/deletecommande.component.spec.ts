import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecommandeComponent } from './deletecommande.component';

describe('DeletecommandeComponent', () => {
  let component: DeletecommandeComponent;
  let fixture: ComponentFixture<DeletecommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletecommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
