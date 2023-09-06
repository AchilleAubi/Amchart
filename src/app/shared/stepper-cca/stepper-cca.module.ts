import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperCcaComponent } from './stepper-cca.component';
import { StepsModule } from 'primeng/steps';
import { ButtonsModule } from '../buttons/buttons.module';

@NgModule({
  imports: [
    CommonModule,
    StepsModule,
    ButtonsModule
  ],
  declarations: [StepperCcaComponent],
  exports: [StepperCcaComponent]
})
export class StepperCcaModule { }
