import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sertificate } from './certificates';

describe('Sertificate', () => {
  let component: Sertificate;
  let fixture: ComponentFixture<Sertificate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sertificate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sertificate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
