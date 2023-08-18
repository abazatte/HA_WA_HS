import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BahnhofservicesPage } from './bahnhofservices.page';

const routes: Routes = [
  {
    path: '',
    component: BahnhofservicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BahnhofservicesPageRoutingModule {}
