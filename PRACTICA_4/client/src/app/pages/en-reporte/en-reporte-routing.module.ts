import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnReportePage } from './en-reporte.page';

const routes: Routes = [
  {
    path: '',
    component: EnReportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnReportePageRoutingModule {}
