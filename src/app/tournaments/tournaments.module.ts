import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentComponent } from './tournament/tournament.component';
import { TournamentsRoutingModule } from './tournaments-routing.module';
import { MaterialsModule } from '../shared/materials.module';
import { PlayerComponent } from './player/player.component';
import { ArticlesComponent } from './sales/articles/articles.component';



@NgModule({
  declarations: [
    TournamentComponent,
    PlayerComponent,
    ArticlesComponent,
  ],
  imports: [
    CommonModule,
    TournamentsRoutingModule,
    MaterialsModule
  ],
})
export class TournamentsModule { }
