import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerercommandeComponent } from './gerercommande.component';

describe('GerercommandeComponent', () => {
  let component: GerercommandeComponent;
  let fixture: ComponentFixture<GerercommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerercommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerercommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
