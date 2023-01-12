import { Component,  OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { AdherentsService } from 'src/app/core/mongo_services/adherents.service';
import { Adherent } from '../../adherent.interface';
import { tableColumns } from './adherents-table.definition';

@Component({
  selector: 'app-adherents-list',
  templateUrl: './adherents-list.component.html',
  styleUrls: ['./adherents-list.component.scss']
})


export class AdherentsListComponent implements OnInit {


  columns = tableColumns ;
  displayedColumns = this.columns.map(c => c.columnDef);
  dataSource = new MatTableDataSource<Adherent>([]) ;

  adherentSelected!: Adherent;
  adherentsTotalNumber !: number;
  adherentsSelectedNumber !: number;


  constructor (private adhService : AdherentsService) {}
  ngOnInit(): void {

    this.adhService.adherents$.subscribe(
      (adh:Adherent[])=> {
        this.dataSource = new MatTableDataSource<Adherent>(adh);
        this.adherentSelected = adh[0] ;
        this.adherentsTotalNumber = adh.length;
        this.adherentsSelectedNumber = adh.length;
        console.log("%d cards",adh.length);
      }


    );
};

onCreationReq(requested:boolean){
  console.log("creationReq", requested);
  this.adhService.createLocalNewEntry();
  // const white ='';
  // this.setFilter(white);
  if (requested) {

    // this.selectAdherent(this.whiteMember);
  } else {
  }
}

  selectAdherent(adherent : Adherent){
    this.adherentSelected = adherent;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.setFilter(filterValue);
  }
  setFilter(value : any) {
    this.dataSource.filter = value.trim().toLowerCase();
    this.adherentSelected= (this.dataSource.filteredData[0]);
    this.adherentsSelectedNumber = this.dataSource.filteredData.length;
  }

   redirectToUpdate = (id: string) => {

  }
}

