import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyBadge } from './technology-badge';

describe('TechnologyBadge', () => {
  let component: TechnologyBadge;
  let fixture: ComponentFixture<TechnologyBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyBadge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyBadge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
