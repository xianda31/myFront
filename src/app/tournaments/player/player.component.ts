import { Component, Input } from '@angular/core';
import { Player } from '../tournament/tournament.interface';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  @Input() player : Player = {firstName: 'toto', lastName:'titi'} ;

  byCard : boolean = true;
  labelPosition:  '3€' | '4€'  | '0€' = '3€';
  playerPresent : boolean = false;



onPlayerClick() {
this.playerPresent = !this.playerPresent;

}
getInitials(firstName:string, lastName:string) {
  return firstName[0].toUpperCase() + lastName[0].toUpperCase();
}
}
