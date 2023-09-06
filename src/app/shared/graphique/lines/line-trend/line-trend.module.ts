import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineTrendComponent } from './line-trend.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LineTrendComponent],
  exports: [
    LineTrendComponent
  ]
})
export class LineTrendModule { }
