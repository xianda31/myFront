import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
      lastName1: new FormControl(''),
      lastName2: new FormControl(''),
    });

  }


  changeControlTextToUpperCase(field : string) {
    let obj =  this.teamForm.controls[field].value.toUpperCase();
    this.teamForm.controls[field].patchValue(obj);
    console.log(obj);
  }
}
