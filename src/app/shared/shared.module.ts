import { NgModule } from '@angular/core';

import { MaterialsModule } from './materials.module';



@NgModule({
  declarations: [],
  imports: [

    MaterialsModule,
  ],
  exports:[
    MaterialsModule
  ]
})
export class SharedModule { }
