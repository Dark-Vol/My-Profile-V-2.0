import { Routes } from '@angular/router';
import { ProjectsList } from './pages/projects-list/projects-list';
import { ProjectsDatails } from './pages/projects-datails/projects-datails';
import { ProjectsItem } from './pages/projects-item/projects-item';

export const PROJECTS_ROUTES: Routes = [
  {
    path: '',
    component: ProjectsList
  },
  {
    path: 'technology/:slug',
    component: ProjectsDatails
  },
  {
    path: ':id',
    component: ProjectsItem
  }
];
