import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/adherents/member.interface';
import { AdherentsService } from 'src/app/shared/adherents.service';
import { TournamentsService } from 'src/app/shared/tournaments.service';
import { BehaviorSubject, concatMap, take } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

type LicencePair = string[];

class LicenseValidator {static validLicense(fc: FormControl){
  if(fc.value === "543210" ){
    console.log("yop");
    return ({validLicense: true});
  } else {
    console.log("nop");
    return (null);
  }
}}

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
  teamForm !: FormGroup;



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
  onSubmitPair() {
    console.log(this.teamForm.value)
    this.namedPairs.push([this.findMemberName(this.teamForm.controls['license1'].value),
                         this.findMemberName(this.teamForm.controls['license2'].value)]);

  }

  findMember(license: string): number {
    return this.adherentList.findIndex(x => x.license === +license);

  }
  findMemberName(license: string): string {

    var index = this.adherentList.findIndex(x => x.license === +license);
    // console.log(license,index);
    if (index != -1) return (this.adherentList[index].firstName + " " + this.adherentList[index].lastName) ;
   return ( "invité (" + license  + ")");

  }

  changeControlTextToUpperCase(field : string) {
    let obj =  this.teamForm.controls[field].value.toUpperCase();
    this.teamForm.controls[field].patchValue(obj);
    // console.log(obj);
  }


}

