import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationbyidComponent } from './publicationbyid.component';

describe('PublicationbyidComponent', () => {
  let component: PublicationbyidComponent;
  let fixture: ComponentFixture<PublicationbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationbyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicationbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
