import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopFloorComponent } from './components/shop-floor/shop-floor.component';

const routes: Routes = [
  {path: '', component: ShopFloorComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
