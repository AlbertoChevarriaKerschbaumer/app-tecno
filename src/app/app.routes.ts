import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'docentes',
    loadComponent: () => import('./docentes/docentes.page').then( m => m.DocentesPage)
  },
  {
    path: 'programas',
    loadComponent: () => import('./programas/programas.page').then( m => m.ProgramasPage)
  },
  {
    path: 'jerarquicos',
    loadComponent: () => import('./jerarquicos/jerarquicos.page').then( m => m.JerarquicosPage)
  },
  {
    path: 'prod-agrop',
    loadComponent: () => import('./prod-agrop/prod-agrop.page').then( m => m.ProdAgropPage)
  },
  {
    path: 'contab',
    loadComponent: () => import('./contab/contab.page').then( m => m.ContabPage)
  },
  {
    path: 'arquitecttura',
    loadComponent: () => import('./arquitecttura/arquitecttura.page').then( m => m.ArquitectturaPage)
  },
  {
    path: 'enfermeria',
    loadComponent: () => import('./enfermeria/enfermeria.page').then( m => m.EnfermeriaPage)
  },
  {
    path: 'mecatronica',
    loadComponent: () => import('./mecatronica/mecatronica.page').then( m => m.MecatronicaPage)
  },
  {
    path: 'admision',
    loadComponent: () => import('./admision/admision.page').then( m => m.AdmisionPage)
  },
  {
    path: 'matricula',
    loadComponent: () => import('./matricula/matricula.page').then( m => m.MatriculaPage)
  },  
];
