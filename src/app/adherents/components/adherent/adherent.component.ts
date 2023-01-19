import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdherentsService } from 'src/app/core/mongo_services/adherents.service';
import { Member, WhiteMember } from '../../member.interface';

@Component({
  selector: 'app-adherent',
  templateUrl: './adherent.component.html',
  styleUrls: ['./adherent.component.scss']
})

//
// composant d'edition de fiche Member
// create vs update : sur existance d'un id mangoDB
// appelle le composant list (selection)="onSelect($event)" qui renvoie un Member à editer
//
export class AdherentComponent implements OnInit {

  saveButtonDisabled: boolean = true;
  creatingNewRecord : boolean = true;


  constructor(private frmbldr: FormBuilder,
    private adhService: AdherentsService) { }
  memberForm !: FormGroup;

  ngOnInit() {
    this.initForm();
    this.memberForm.valueChanges.subscribe(change => {
      this.saveButtonDisabled = false;
      // console.log("changing", change);
    });
  }

  filter(member : Member){

  }

  onSave() {
    if (this.creatingNewRecord) {
      this.adhService.createAdherent(this.memberForm.value)
    }else{

      this.adhService.updateById(this.memberForm.value);
      // console.log("saving", this.memberForm.value)
    }
    this.saveButtonDisabled = true;
  }

  onCreate() {
    this.updateFormValues(WhiteMember);
    this.saveButtonDisabled = true;
    this.creatingNewRecord = true;
  }

  //  from-list-picking handler
  onSelect(member: Member) {
    this.updateFormValues(member);
    this.saveButtonDisabled = true;
    this.creatingNewRecord = false;
  }

  updateFormValues(member: Member) {
    this.memberForm.patchValue(member,{emitEvent:false});  // pour ne pas que valueChanges claque ...
  }


  initForm() {
    this.memberForm = this.frmbldr.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      zip: new FormControl(''),
      license: new FormControl(''),
      adh_key:  new FormControl(''),    // non visible ; pour mappage memberForm -> Member
      _id: new FormControl(''),    // non visible ; pour mappage memberForm -> Member
    });

  }
}



