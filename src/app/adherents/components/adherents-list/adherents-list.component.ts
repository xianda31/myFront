import { Component,  EventEmitter,  OnInit, Output } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { AdherentsService } from 'src/app/core/mongo_services/adherents.service';
import { Member } from '../../member.interface';
import { tableColumns } from './adherents-table.definition';

@Component({
  selector: 'app-adherents-list',
  templateUrl: './adherents-list.component.html',
  styleUrls: ['./adherents-list.component.scss']
})


export class AdherentsListComponent implements OnInit {

  @Output() selection: EventEmitter<Member> = new EventEmitter<Member>();

  columns = tableColumns ;
  displayedColumns = this.columns.map(c => c.columnDef);
  dataSource = new MatTableDataSource<Member>([]) ;

  // adherentSelected!: Member;
  adherentsTotalNumber !: number;
  adherentsSelectedNumber !: number;


  constructor (private adhService : AdherentsService) {}
  ngOnInit(): void {

    this.adhService.adherents$.subscribe(
      (adh:Member[])=> {
        this.dataSource = new MatTableDataSource<Member>(adh);
        this.adherentsTotalNumber = adh.length;
        this.adherentsSelectedNumber = adh.length;
        console.log("%d cards",adh.length);
      }


    );
};

  selectAdherent(adherent : Member){
    // this.adherentSelected = adherent;
    this.selection.emit(adherent);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.setFilter(filterValue);
  }
  setFilter(value : any) {
    this.dataSource.filter = value.trim().toLowerCase();
    // this.adherentSelected= (this.dataSource.filteredData[0]);
    this.adherentsSelectedNumber = this.dataSource.filteredData.length;
  }


}

