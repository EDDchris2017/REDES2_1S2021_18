import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnReportePageRoutingModule } from './en-reporte-routing.module';

import { EnReportePage } from './en-reporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnReportePageRoutingModule
  ],
  declarations: [EnReportePage]
})
export class EnReportePageModule {}
