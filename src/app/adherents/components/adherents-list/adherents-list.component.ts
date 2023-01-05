import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { AdherentsService } from 'src/app/core/mongo_services/adherents.service';
import { Adherent } from '../../adherent.interface';


@Component({
  selector: 'app-adherents-list',
  templateUrl: './adherents-list.component.html',
  styleUrls: ['./adherents-list.component.scss']
})


export class AdherentsListComponent implements OnInit {

  columns = [
    {
      columnDef: 'lastName',
      header: 'Nom',
      cell: (element: Adherent) => `${element.lastName}`,
    },
    {
      columnDef: 'firstName',
      header: 'Prénom',
      cell: (element: Adherent) => `${element.firstName}`,
    },
    {
      columnDef: 'license',
      header: 'N° licence',
      cell: (element: Adherent) => `${element.license}`,
    },
    {
      columnDef: 'adh_key',
      header: 'key',
      cell: (element: Adherent) => `${element.adh_key}`,
    },
    {
      columnDef: 'icon',
      header: 'anomalie',
      cell: (element: Adherent) => `${element.license % 2 ? 'thumb_up' : 'thumb_down'}`,
    },
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
  dataSource = new MatTableDataSource<Adherent>([]) ;
  selectedAdherent$ !: BehaviorSubject<Adherent> ;
  adherentsTotalNumber !: number;
  adherentsSelectedNumber !: number;


 // selectedAdherent !: Adherent ;
 // selected : boolean = false;


  constructor (private adhService : AdherentsService) {}
  ngOnInit(): void {

    this.adhService.adherents$.subscribe(
      (adh:Adherent[])=> {
        this.dataSource = new MatTableDataSource<Adherent>(adh);
        this.selectedAdherent$ = new BehaviorSubject<Adherent>(adh[0])
        this.adherentsTotalNumber = adh.length;
        this.adherentsSelectedNumber = adh.length;
      }

    );
};



  selectAdherent(adherent : Adherent){
//    this.selectedAdherent = adherent ;
    this.selectedAdherent$.next(adherent);

 //   this.selected = true;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.selectedAdherent$.next(this.dataSource.filteredData[0]);
    this.adherentsSelectedNumber = this.dataSource.filteredData.length;
  }

   redirectToUpdate = (id: string) => {

  }
}

