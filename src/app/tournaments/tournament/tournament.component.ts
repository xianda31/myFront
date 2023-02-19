import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/adherents/member.interface';
import { AdherentsService } from 'src/app/shared/adherents.service';
import { TournamentsService } from 'src/app/shared/tournaments.service';
import { BehaviorSubject, concatMap, take } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Player, Team } from './tournament.interface';

type LicencePair = string[];



@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})


export class TournamentComponent implements OnInit {

  adherentList !: Member[];
  teams !: Team[];
  toto : Player = {firstName: 'toto', lastName:'titi'};

  httpLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  teamForm !: FormGroup;
  labelPosition: Array<'before' | 'after'>  = ['after'];



  constructor(private adhService: AdherentsService,
              private formbuilder: FormBuilder,
              private tournmntService: TournamentsService) { }


  ngOnInit(): void {

    this.teamForm = this.formbuilder.group({
      license1: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(7),
        Validators.pattern('^(?=.*[0-9])[0-9]+$'),
        // LicenseValidator.validLicense,
      ])),
      license2: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(7),
        Validators.pattern('^(?=.*[0-9])[0-9]+$'),

      ]))
    });


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
            this.teams = data.map((license_pair) => ({
                playerA: this.findPlayer(license_pair[0]),
                playerB: this.findPlayer(license_pair[1])

            }));
          });
      }
    });

  }


  onSubmitPair() {
    // console.log(this.teamForm.value)

    this.teams.push({
      playerA : this.findPlayer(this.teamForm.controls['license1'].value),
      playerB : this.findPlayer(this.teamForm.controls['license2'].value)
    });

    this.teamForm.reset();
  }

  findMember(license: string): number {
    return this.adherentList.findIndex(x => x.license === +license);

  }

  findPlayer(license: string): Player {

    var index = this.adherentList.findIndex(x => x.license === +license);
    // console.log(license,index);
    if (index != -1) return ({
        firstName : this.adherentList[index].firstName,
        lastName : this.adherentList[index].lastName} ) ;
   return ({
    firstName : "licencié(e)",
    lastName :  "" + license  });

  }

  changeControlTextToUpperCase(field : string) {
    let obj =  this.teamForm.controls[field].value.toUpperCase();
    this.teamForm.controls[field].patchValue(obj);
    // console.log(obj);
  }


}

