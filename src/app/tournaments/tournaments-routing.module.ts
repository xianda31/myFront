import { NgModule } from '@angular/core';
import { TournamentComponent } from './tournament/tournament.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: TournamentComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TournamentsRoutingModule { }
