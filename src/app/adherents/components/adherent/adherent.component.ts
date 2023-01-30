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

  saveButtonEnabled: boolean = false;
  creatingNewRecord : boolean = true;
  recordCleared : boolean = true;
  deletionRecoverable : boolean = false;
  undoProposed : boolean = false;
  spinning : boolean = false;

 // modifyButtonEnabled : boolean = false;

  lastNameKeySearch : string ="";
  firstNameKeySearch : string ="";
  keySearch : string = "";

  constructor(private formbuilder: FormBuilder,
    private adhService: AdherentsService) { }
  memberForm !: FormGroup;

  ngOnInit() {
    this.initForm();
    this.memberForm.valueChanges.subscribe(change => {
       if (this.recordCleared) {
          this.recordCleared = false;

       } else {
          this.saveButtonEnabled = true;
       };

    });

    this.memberForm.controls['lastName'].valueChanges.subscribe(change => {
      this.lastNameKeySearch = change ;
      this.keySearch= this.lastNameKeySearch + '$' + this.firstNameKeySearch;
    });
      this.memberForm.controls['firstName'].valueChanges.subscribe(change=>{
        this.firstNameKeySearch = change ;
        this.keySearch= this.lastNameKeySearch + '$' + this.firstNameKeySearch;
       } );

  }
  onSave() {
    if (this.creatingNewRecord) {
      this.adhService.createAdherent(this.memberForm.value)
    }else{
      this.adhService.updateById(this.memberForm.value);
    }
   this.resetForm();
  }

  onDelete() {
    this.adhService.deleteById(this.memberForm.value);
    this.undoProposed = true ;
    this.deletionRecoverable = true;
    this.saveButtonEnabled = false;
    this.memberForm.disable();    // non modifiable le temps d'un undo
  }

  onUndo() {
    this.adhService.createAdherent(this.memberForm.value);
    this.spinning=true;
    setTimeout(()=> {
      this.spinning=false;
      this.resetForm();
    },1000);
  }
  onClear() {
    this.resetForm();
  }

  //  from-list-picking handler (adherents-list.ts)
  onSelect(member: Member) {
    this.updateFormValues(member);
    this.saveButtonEnabled = false;
    this.creatingNewRecord = false;
  }

  updateFormValues(member: Member) {
    this.memberForm.patchValue(member,{emitEvent:false});  // pour ne pas que valueChanges claque ...
  }

  resetForm() {
    this.recordCleared = true;
    this.updateFormValues(WhiteMember);
    this.creatingNewRecord = true;
    this.keySearch="";    // reset filtre recherche
    this.saveButtonEnabled = false;
    this.deletionRecoverable = false;
    this.undoProposed = false ;
    this.memberForm.enable();

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
      _id: new FormControl(''),

    });
    this.resetForm();
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



