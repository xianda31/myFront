import { Component, EventEmitter, OnInit, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { AdherentsService } from 'src/app/core/mongo_services/adherents.service';
import { Member } from '../../member.interface';
import { tableColumns } from './adherents-table.definition';

@Component({
  selector: 'app-adherents-list',
  templateUrl: './adherents-list.component.html',
  styleUrls: ['./adherents-list.component.scss']
})


export class AdherentsListComponent implements OnInit,OnChanges {

  @Output() selection: EventEmitter<Member> = new EventEmitter<Member>();
  @Input() keySearch  ='';

  columns = tableColumns ;
  displayedColumns = this.columns.map(c => c.columnDef);
  dataSource = new MatTableDataSource<Member>([]) ;

  keyWord!: any;
  adherentsTotalNumber !: number;
  adherentsSelectedNumber !: number;


  constructor (private adhService : AdherentsService) {}

  ngOnChanges(changes:SimpleChanges) {
    this.keyWord= changes['keySearch'].currentValue;
    this.setFilter(this.keyWord);
  }
  ngOnInit(): void {
    this.clearKeyWord() ;
    this.adhService.adherents$.subscribe(
      (adh:Member[])=> {
        this.dataSource = new MatTableDataSource<Member>(adh);
        this.adherentsTotalNumber = adh.length;
        this.adherentsSelectedNumber = adh.length;
        // console.log("%d cards",adh.length);
        this.setFilter(this.keyWord);
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
    this.keyWord= value;
    this.adherentsSelectedNumber = this.dataSource.filteredData.length;
  }
clearKeyWord() {
  this.keyWord="" ;
  this.setFilter(this.keyWord);
}

}

