import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap2Component } from './baitap2.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { IndexContentComponent } from './index-content/index-content.component';
import { SliderComponent } from './slider/slider.component';
import { ItemComponent } from './item/item.component';



@NgModule({
  declarations: [Baitap2Component, HeaderComponent, FooterComponent, IndexComponent, IndexContentComponent, SliderComponent, ItemComponent],
  imports: [
    CommonModule
  ],
  //không cần phải exports nữa nếu như sài routing
  // exports: [
  //   Baitap2Component
  // ]
})
export class Baitap2Module { }
