// import { Routes } from '@angular/router';

// export const routes: Routes = [
//   {
//     path: 'projects',
//     loadChildren: () =>
//       import('./features/projects/projects.module')
//         .then(m => m.ProjectsModule)
//   },
//   {
//     path: 'technologies',
//     loadChildren: () =>
//       import('./features/technologies/technologies.module')
//         .then(m => m.TechnologiesModule)
//   },
//   { path: '', redirectTo: 'projects', pathMatch: 'full' }
// ];
// import { Routes } from '@angular/router';
// import { Main } from './features/main/main';
// import { Projects } from './features/projects/projects';
// import { Sertificate } from './features/certificates/certificates';
// export const routes: Routes = [
//   {
//     path: '',
//     component: Main
//   },
//   {
//     path: "prjects",
//     component: Projects
//   },
//   {
//     path: "sertificate",
//     component: Sertificate
//   }
// ];

import { Routes } from '@angular/router';
import { PROJECTS_ROUTES } from './features/projects/projects.routes';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/main/main')
        .then(m => m.Main)
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects')
        .then(m => m.Projects),
    children: PROJECTS_ROUTES
  },
  {
    path: 'technologies',
    loadChildren: () =>
      import('./features/technologies/technologies.routes')
        .then(m => m.TECHNOLOGIES_ROUTES)
  },
  {
    path: 'certificates',
    loadComponent: () =>
      import('./features/certificates/certificates')
        .then(m => m.Sertificate)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about')
        .then(m => m.About)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
