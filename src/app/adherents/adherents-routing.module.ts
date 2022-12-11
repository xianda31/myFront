import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdherentsListComponent } from './components/adherents-list/adherents-list.component';

const routes: Routes = [
  {path: '', component: AdherentsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdherentsRoutingModule { }
