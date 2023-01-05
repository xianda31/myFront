import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Adherent } from '../../adherent.interface';

@Component({
  selector: 'app-adherent',
  templateUrl: './adherent.component.html',
  styleUrls: ['./adherent.component.scss']
})

export class AdherentComponent  implements OnInit {

  @Input('adherent') adherentIn$ !: BehaviorSubject<Adherent> ;
  adherent !: Adherent;

  constructor(private frmbldr : FormBuilder) {}
   formGroup !: FormGroup ;

  ngOnInit() {
     this.adherentIn$.subscribe( adh => this.adherent = adh);
     this.initForm() ;

  }

  onClear() {
    this.adherent.lastName="";
    this.adherent.firstName="";
    this.adherent.email="";
    this.adherent.phone="";
    this.adherent.adress="";
    this.adherent.town="";
    this.adherent.zip="";
    this.adherent.license=0;


  }
  onClose(){

  }

  initForm() {
this.formGroup =  this.frmbldr.group ({
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      email : new FormControl(''),
      mobile : new FormControl(''),
      license : new FormControl(''),
      address : new FormControl(''),
      zip : new FormControl(''),
      town : new FormControl(''),
    });

  }
}



