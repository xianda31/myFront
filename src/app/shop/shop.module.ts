import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';

import { ShopFloorComponent } from './components/shop-floor/shop-floor.component';
import { ShopItemComponent } from './components/shop-item/shop-item.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ShopService } from './services/shop.service';
import { GetNameComponent } from './components/get-name/get-name.component';

import { MaterialsModule } from '../shared/materials.module';



@NgModule({
  declarations: [
    ShopFloorComponent,
    ShopItemComponent,
    ShopListComponent,
    GetNameComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MaterialsModule


  ],
  providers: [
    ShopService
  ]
})
export class ShopModule { }
