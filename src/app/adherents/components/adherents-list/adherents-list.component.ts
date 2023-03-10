import { Component, EventEmitter, OnInit, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { AdherentsService } from 'src/app/shared/adherents.service';
import { Member } from '../../member.interface';
import { memberTableColumns } from './adherents-table.definition';
import { SortPipe } from 'src/app/shared/pipes/sortPipe';

@Component({
  selector: 'app-adherents-list',
  templateUrl: './adherents-list.component.html',
  styleUrls: ['./adherents-list.component.scss']
})


export class AdherentsListComponent implements OnInit,OnChanges {

  @Output() selection: EventEmitter<Member> = new EventEmitter<Member>();
  @Input() keySearch  ='';

  columns = memberTableColumns ;
  displayedColumns = this.columns.map(c => c.columnDef);
  dataSource = new MatTableDataSource<Member>([]) ;

  keyWord!: any;
  adherentsTotalNumber !: number;
  adherentsSelectedNumber !: number;


  constructor (private adhService : AdherentsService,
                private sortPipe : SortPipe) { }

 ngOnChanges(changes:SimpleChanges) {
      this.keyWord= changes['keySearch'].currentValue;
      this.setFilter(this.keyWord);
                }
  ngOnInit(): void {

        this.clearKeyWord() ;
    this.dataSource.filterPredicate = (data: Member, filter: string) => {
      const filterArray = filter.split('$');
      const lastName = filterArray[0];
      const firstName = filterArray[1];
      return data.lastName.toLowerCase().includes(lastName) && data.firstName.toLowerCase().includes(firstName);  } ;

    this.adhService.adherents$.subscribe(
      (adh:Member[])=> {
        const sortedAdh = this.sortPipe.transform(adh, "asc", "lastName");
        this.dataSource.data =sortedAdh;
        this.adherentsTotalNumber = sortedAdh.length;
        this.adherentsSelectedNumber = sortedAdh.length;
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

