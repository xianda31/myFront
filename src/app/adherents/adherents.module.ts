import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdherentsRoutingModule } from './adherents-routing.module';
import { AdherentsListComponent } from './components/adherents-list/adherents-list.component';


@NgModule({
  declarations: [
    AdherentsListComponent
  ],
  imports: [
    CommonModule,
    AdherentsRoutingModule
  ]
})
export class AdherentsModule { }
