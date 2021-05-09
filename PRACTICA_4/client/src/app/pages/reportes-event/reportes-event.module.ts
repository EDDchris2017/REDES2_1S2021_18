import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportesEventPageRoutingModule } from './reportes-event-routing.module';

import { ReportesEventPage } from './reportes-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportesEventPageRoutingModule
  ],
  declarations: [ReportesEventPage]
})
export class ReportesEventPageModule {}
