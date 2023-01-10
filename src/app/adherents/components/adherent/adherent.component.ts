import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdherentsService } from 'src/app/core/mongo_services/adherents.service';
import { Adherent } from '../../adherent.interface';

@Component({
  selector: 'app-adherent',
  templateUrl: './adherent.component.html',
  styleUrls: ['./adherent.component.scss']
})

export class AdherentComponent  implements OnInit {

  @Input() adherent !: Adherent ;

  constructor(private frmbldr : FormBuilder ,
              private adhService : AdherentsService )  {}
   formGroup !: FormGroup ;

  ngOnInit() {
      this.initForm() ;


  }

  onSave() {
    this.adhService.updateById(this.adherent);
    console.log("saving ",this.adherent);
    //  this._adherent.lastName="";
    // this._adherent.firstName="";
    // this._adherent.email="";
    // this._adherent.phone="";
    // this._adherent.adress="";
    // this._adherent.town="";
    // this._adherent.zip="";
    // this._adherent.license=0;
    //  this.adherentIn.lastName = "";

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



