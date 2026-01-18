import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'projects',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'projects/technology/*',
    renderMode: RenderMode.Server
  },
  {
    path: 'projects/*',
    renderMode: RenderMode.Server
  },
  {
    path: 'technologies',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'technologies/*',
    renderMode: RenderMode.Server
  },
  {
    path: 'certificates',
    renderMode: RenderMode.Prerender
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
