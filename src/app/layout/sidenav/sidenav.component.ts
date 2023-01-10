import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})


export class SidenavComponent {
SidenavOpened : boolean=true;

toggle() {this.SidenavOpened =!this.SidenavOpened}
}
