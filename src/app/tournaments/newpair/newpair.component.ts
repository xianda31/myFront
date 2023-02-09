import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdherentsService } from 'src/app/shared/adherents.service';

@Component({
  selector: 'app-newpair',
  templateUrl: './newpair.component.html',
  styleUrls: ['./newpair.component.scss']
})
export class NewpairComponent implements OnInit{

  teamForm !: FormGroup;

  constructor(private adhService: AdherentsService,
    private formbuilder: FormBuilder) {}


    ngOnInit(): void {
    this.teamForm = this.formbuilder.group({
      license1: new FormControl('',Validators.minLength(6)),
      license2: new FormControl('',Validators.minLength(6)),
    });

    this.teamForm.valueChanges.subscribe(
     ((d)=>  console.log("got :",d))
    );

  }


  changeControlTextToUpperCase(field : string) {
    let obj =  this.teamForm.controls[field].value.toUpperCase();
    this.teamForm.controls[field].patchValue(obj);
    console.log(obj);
  }
}
