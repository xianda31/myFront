import { Component, Input } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  @Input() player : string = "?";

  byCard : boolean = true;
  labelPosition:  '3€' | '4€'  | '0€' = '3€';
  playerPresent : boolean = false;


onPlayerClick() {
this.playerPresent = !this.playerPresent;

}

}
