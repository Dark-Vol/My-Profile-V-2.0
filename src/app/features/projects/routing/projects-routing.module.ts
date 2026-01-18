import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsList } from '../pages/projects-list/projects-list';
import { ProjectsDatails } from '../pages/projects-datails/projects-datails';

const routes: Routes = [
  { path: '', component: ProjectsList },
  { path: ':slug', component: ProjectsDatails }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
