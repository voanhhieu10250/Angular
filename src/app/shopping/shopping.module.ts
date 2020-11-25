import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductItemComponent } from './product-item/product-item.component';



@NgModule({
  declarations: [ShoppingComponent, ProductListComponent, CartComponent, ProductItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ShoppingComponent
  ]
})
export class ShoppingModule { }
