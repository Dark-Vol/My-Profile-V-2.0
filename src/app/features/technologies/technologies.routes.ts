import { Routes } from '@angular/router';
import { TechnologiesList } from './pages/technologies-list/technologies-list';
import { TechnologiesDetails } from './pages/technologies-details/technologies-details';

export const TECHNOLOGIES_ROUTES: Routes = [
  {
    path: '',
    component: TechnologiesList
  },
  {
    path: ':slug',
    component: TechnologiesDetails
  }
];
