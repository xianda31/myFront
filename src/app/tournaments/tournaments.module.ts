import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentComponent } from './tournament/tournament.component';
import { TournamentsRoutingModule } from './tournaments-routing.module';
import { MaterialsModule } from '../shared/materials.module';
import { PlayerComponent } from './player/player.component';
import { NewpairComponent } from './newpair/newpair.component';



@NgModule({
  declarations: [
    TournamentComponent,
    PlayerComponent,
    NewpairComponent,
  ],
  imports: [
    CommonModule,
    TournamentsRoutingModule,
    MaterialsModule
  ],
})
export class TournamentsModule { }
