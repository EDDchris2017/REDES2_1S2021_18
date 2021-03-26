import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReIndividualPage } from './re-individual.page';

const routes: Routes = [
  {
    path: '',
    component: ReIndividualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReIndividualPageRoutingModule {}
