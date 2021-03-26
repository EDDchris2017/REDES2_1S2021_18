import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReIndividualPageRoutingModule } from './re-individual-routing.module';

import { ReIndividualPage } from './re-individual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReIndividualPageRoutingModule
  ],
  declarations: [ReIndividualPage]
})
export class ReIndividualPageModule {}
