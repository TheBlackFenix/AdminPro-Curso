import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/pages.component').then((m) => m.PagesComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'progress',
        loadComponent: () =>
          import('./pages/progress/progress.component').then(
            (m) => m.ProgressComponent
          ),
      },
      {
        path: 'grafica1',
        loadComponent: () =>
          import('./pages/grafica1/grafica1.component').then(
            (m) => m.Grafica1Component
          ),
      },
    ],
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/nopagefound/nopagefound.component').then(
        (m) => m.NopagefoundComponent
      ),
  },
];
