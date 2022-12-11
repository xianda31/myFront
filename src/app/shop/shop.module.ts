import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './components/shop/shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShopItemComponent } from './components/shop-item/shop-item.component';



@NgModule({
  declarations: [
    ShopComponent,
    ShopItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule,
  ]
})
export class ShopModule { }
