import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkenPageRoutingModule } from './parken-routing.module';

import { ParkenPage } from './parken.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkenPageRoutingModule
  ],
  declarations: [ParkenPage]
})
export class ParkenPageModule {}
