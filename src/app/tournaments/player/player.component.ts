import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  @Input() player : string = "?";

  checked : boolean = false;
  labelPosition: 'carte' | 'espèces' = 'carte';


}
