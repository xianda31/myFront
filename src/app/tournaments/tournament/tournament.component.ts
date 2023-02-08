import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/adherents/member.interface';
import { AdherentsService } from 'src/app/shared/adherents.service';
import { TournamentsService } from 'src/app/shared/tournaments.service';
import { BehaviorSubject, concatMap, take } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

type LicencePair = string[];


@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})


export class TournamentComponent implements OnInit {

  adherentList !: Member[];
  tournament !: LicencePair[];



  namedPairs : Array<LicencePair> = [];
  httpLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor(private adhService: AdherentsService,
              private tournmntService: TournamentsService) { }


  ngOnInit(): void {


    this.adhService.adherents$
      .subscribe(
        (adh: Member[]) => {
          this.adherentList = adh;
          this.httpLoading$.next(true);
        });

    this.httpLoading$.pipe(take(1)).subscribe(done => {
      if (done) {
        // console.log('get completed !');
        this.tournmntService.getTournamentFromServer()
          .subscribe((data: LicencePair[]) => {
            this.tournament = data;
            this.getTournamentPairs()
          });
      }
    });

  }

  getTournamentPairs() {
    this.tournament.forEach((data: LicencePair) => {
      this.namedPairs.push([this.findMemberName(data[0]), this.findMemberName(data[1])]);
    })
  }


  findMember(license: string): number {
    return this.adherentList.findIndex(x => x.license === +license);

  }
  findMemberName(license: string): string {
    var index = this.adherentList.findIndex(x => x.license === +license);
    // console.log(index);
    if (index != -1) return (this.adherentList[index].firstName + " " + this.adherentList[index].lastName) ;
   return ( "invité (" + license  + ")");

  }


}

