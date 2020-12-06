import { PaginationComponent } from './pagination/pagination.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  declarations: [PaginationComponent, ErrorMessageComponent],
  imports: [
    CommonModule, MatButtonModule, MatCardModule
  ],
  exports: [
    MatButtonModule,
    PaginationComponent,
    MatCardModule,
    ErrorMessageComponent
  ]
})
export class ComponentsModule { }
