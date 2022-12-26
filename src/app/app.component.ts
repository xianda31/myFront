import { Component, OnInit } from '@angular/core';
import { AdherentsService } from './core/mongo_services/adherents.service';
import { Adherent } from 'src/app/adherents/adherent.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'myFront';
  adherentsCount : number = 0;


  constructor (private adhService : AdherentsService) {}
  ngOnInit(): void {

  this.adhService._getAdherents$().subscribe(
    (adh : Adherent[]) => {
      this.adherentsCount = adh.length ;
    }
  );

};

}


