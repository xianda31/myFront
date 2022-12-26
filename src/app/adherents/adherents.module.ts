import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdherentsRoutingModule } from './adherents-routing.module';
import { AdherentsListComponent } from './components/adherents-list/adherents-list.component';
import { MaterialsModule } from '../shared/materials.module';


@NgModule({
  declarations: [
    AdherentsListComponent
  ],
  imports: [
    CommonModule,
    AdherentsRoutingModule,
    MaterialsModule
  ]
})
export class AdherentsModule { }
