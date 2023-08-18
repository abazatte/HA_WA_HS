import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BahnhofservicesPageRoutingModule } from './bahnhofservices-routing.module';

import { BahnhofservicesPage } from './bahnhofservices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BahnhofservicesPageRoutingModule
  ],
  declarations: [BahnhofservicesPage]
})
export class BahnhofservicesPageModule {}
