import { ComponentsModule } from './../shared/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';
import { LayoutComponent } from './layout/layout.component';
import { MovieComponent } from './movie/movie.component';


@NgModule({
  declarations: [UserComponent, LayoutComponent, MovieComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentsModule
  ]
})
export class AdminModule { }
