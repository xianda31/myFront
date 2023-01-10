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
        this.adherentSelected = adh[0]
        this.adherentsTotalNumber = adh.length;
        this.adherentsSelectedNumber = adh.length;
      }

    );
};

  selectAdherent(adherent : Adherent){
    this.adherentSelected = adherent;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.adherentSelected= (this.dataSource.filteredData[0]);
    this.adherentsSelectedNumber = this.dataSource.filteredData.length;
  }

   redirectToUpdate = (id: string) => {

  }
}

