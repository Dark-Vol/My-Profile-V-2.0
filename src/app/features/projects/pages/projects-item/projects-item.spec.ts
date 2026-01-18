import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsItem } from './projects-item';

describe('ProjectsItem', () => {
  let component: ProjectsItem;
  let fixture: ComponentFixture<ProjectsItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
