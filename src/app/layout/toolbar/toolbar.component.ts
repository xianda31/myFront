import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})


export class ToolbarComponent {
SidenavOpened : boolean=true;

toggle() {this.SidenavOpened =!this.SidenavOpened}
}
