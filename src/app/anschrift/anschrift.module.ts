import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnschriftPageRoutingModule } from './anschrift-routing.module';

import { AnschriftPage } from './anschrift.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnschriftPageRoutingModule
  ],
  declarations: [AnschriftPage]
})
export class AnschriftPageModule {}
