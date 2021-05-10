import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'en-reporte',
    loadChildren: () => import('./pages/en-reporte/en-reporte.module').then( m => m.EnReportePageModule)
  },
  {
    path: 'lista-reportes',
    loadChildren: () => import('./pages/reportes/reportes.module').then( m => m.ReportesPageModule)
  },
  {
    path: 're-individual',
    loadChildren: () => import('./pages/re-individual/re-individual.module').then( m => m.ReIndividualPageModule)
  },
  {
    path: 'event-reportes',
    loadChildren: () => import('./pages/reportes-event/reportes-event.module').then( m => m.ReportesEventPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }