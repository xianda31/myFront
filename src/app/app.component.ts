import { Component, OnInit } from '@angular/core';
import { AdherentsService } from './core/mongo_services/adherents.service';
import { Adherent } from './adherents/adherent.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'myFront';
  adherentNumber : number = 0;
  adherentList : Adherent[] =[];

    constructor (private adhService : AdherentsService) {}
  ngOnInit(): void {

    this.getAdherents();
  };



  // READ

  getAdherents() {
    this.adhService.getAdherents().subscribe ( {
      next : adherents => {
        this.adherentList=adherents ;
        this.adherentNumber = this.adherentList.length;
    },
    error : err => {console.log ("a problem ?"); }
  });
}



}
