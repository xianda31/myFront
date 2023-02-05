import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// lazzy loading du 1er module = AdherentsModule

const routes: Routes = [
  { path:'adherents', loadChildren: () => import('./adherents/adherents.module').then(m=>m.AdherentsModule)},
  { path:'tournois', loadChildren: () => import('./tournaments/tournaments.module').then(m=>m.TournamentsModule)},
  { path:'shop', loadChildren: () => import('./shop/shop.module').then(m=>m.ShopModule)},
  { path: '', redirectTo: '',  pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
