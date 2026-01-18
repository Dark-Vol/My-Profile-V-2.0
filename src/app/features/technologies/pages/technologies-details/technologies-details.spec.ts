import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesDetails } from './technologies-details';

describe('TechnologiesDetails', () => {
  let component: TechnologiesDetails;
  let fixture: ComponentFixture<TechnologiesDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologiesDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
