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
  editingLastName : string ="";


  constructor(private formbuilder: FormBuilder,
    private adhService: AdherentsService) { }
  memberForm !: FormGroup;

  ngOnInit() {
    this.initForm();
    this.memberForm.valueChanges.subscribe(change => {
      this.saveButtonDisabled = false;
    });
    this.memberForm.controls['lastName'].valueChanges.subscribe(change =>
      this.editingLastName = change)
  }

  // filter(member : Member){

  // }

  onSave() {
    if (this.creatingNewRecord) {
      this.adhService.createAdherent(this.memberForm.value)
    }else{

      this.adhService.updateById(this.memberForm.value);
    }
    this.saveButtonDisabled = true;
  }

  onDelete() {

    this.adhService.deleteById(this.memberForm.value);
    this.creatingNewRecord = false;

  }


  onClear() {
    this.updateFormValues(WhiteMember);
    this.saveButtonDisabled = true;
    this.creatingNewRecord = true;
  }

  //  from-list-picking handler (adherents-list.ts)
  onSelect(member: Member) {
    this.updateFormValues(member);
    this.saveButtonDisabled = true;
    this.creatingNewRecord = false;
  }

  updateFormValues(member: Member) {
    this.memberForm.patchValue(member,{emitEvent:false});  // pour ne pas que valueChanges claque ...
  }


  initForm() {
    this.memberForm = this.formbuilder.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      license: new FormControl(''),
      mail: new FormControl(''),
      tel: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      zip: new FormControl(''),
    });
  }


  changeControlTextToUpperCase(field : string) {
      let obj =  this.memberForm.controls[field].value.toUpperCase();
      this.memberForm.controls[field].patchValue(obj);
    }

    changeControlTextFirstLetterToUpperCase(field : string) {
      let str = this.memberForm.controls[field].value;
      str = (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase()});
      this.memberForm.controls[field].patchValue(str);
    }
}



