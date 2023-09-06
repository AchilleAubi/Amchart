import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinesModule } from './lines/lines.module';

@NgModule({
  imports: [
    CommonModule,
    LinesModule
  ],
  declarations: [],
  exports: [
    LinesModule
  ]
})
export class GraphiqueModule { }
