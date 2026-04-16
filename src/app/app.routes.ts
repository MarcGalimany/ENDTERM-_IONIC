import { AuthGuard } from './guards/auth-guard';
import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'menu-usuario',
    canActivate: [AuthGuard],
    loadComponent: () => import('./menu-usuario/menu-usuario.page').then((m) => m.MenuUsuarioPage),
  },
  {
    path: 'tab2',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./tab2/tab2.page').then((m) => m.Tab2Page),
  },
  {
    path: 'tab3/:id',
    canActivate: [AuthGuard],
    loadComponent: () =>
    import('./tab3/tab3.page').then((m) => m.Tab3Page),
  },
  {
    path: 'datos-firebase',
    loadComponent: () => import('./datos-firebase/datos-firebase.page').then( m => m.DatosFirebasePage)
  },

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  
  
];
