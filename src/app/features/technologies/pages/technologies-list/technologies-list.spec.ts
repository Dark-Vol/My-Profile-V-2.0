import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesList } from './technologies-list';

describe('TechnologiesList', () => {
  let component: TechnologiesList;
  let fixture: ComponentFixture<TechnologiesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologiesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
