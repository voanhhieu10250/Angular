import { PaginationComponent } from './pagination/pagination.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule, MatButtonModule, MatCardModule
  ],
  exports: [
    MatButtonModule,
    PaginationComponent,
    MatCardModule
  ]
})
export class ComponentsModule { }
