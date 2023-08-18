import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkenPage } from './parken.page';

const routes: Routes = [
  {
    path: '',
    component: ParkenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkenPageRoutingModule {}
