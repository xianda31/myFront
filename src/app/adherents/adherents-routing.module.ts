import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdherentComponent } from './components/adherent/adherent.component';

const routes: Routes = [
  {path: '', component: AdherentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdherentsRoutingModule { }
