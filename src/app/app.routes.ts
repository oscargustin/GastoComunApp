import { Routes } from '@angular/router';
import { TabsPage } from './pages/tabs/tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'settings',
        loadComponent: () => import('./pages/settings/settings.page').then((m) => m.SettingsPage),
      },
      {
        path: 'transacciones',
        loadComponent: () =>
          import('./pages/transacciones/transacciones.page').then(
            (m) => m.TransaccionesPage),
      },
      {
        path: 'historial',
        loadComponent: () => import('./pages/historial/historial.page').then( m => m.HistorialPage),
      },
      {
        path: '',
        redirectTo: 'home', // Redirige al tab 'home' si no se especifica un hijo
        pathMatch: 'full',
      },
      
    ],
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'inicio-admin',
    loadComponent: () =>
      import('./pages/inicio-admin/inicio-admin.page').then((m) => m.InicioAdminPage),
  },
  {
    path: 'registro-usuario',
    loadComponent: () =>
      import('./pages/registro-usuario/registro-usuario.page').then(
        (m) => m.RegistroUsuarioPage
      ),
  },
  {
    path: '',
    redirectTo: 'login', // Redirige al login si no se especifica una ruta
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login', // Manejo de rutas no existentes
  },
  

];
