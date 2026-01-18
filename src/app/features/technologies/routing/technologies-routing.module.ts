import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologiesList } from '../pages/technologies-list/technologies-list';
import { TechnologiesDetails } from '../pages/technologies-details/technologies-details';

const routes: Routes = [
  { path: '', component: TechnologiesList },
  { path: ':slug', component: TechnologiesDetails }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologiesRoutingModule { }
