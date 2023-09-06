import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputCcaComponent } from './input-cca/input-cca.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonsModule } from '@shared/buttons/buttons.module';
import { PasswordCcaComponent } from './password-cca/password-cca.component';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
@NgModule({
  imports: [
    CommonModule,
    CheckboxModule,
    FormsModule,
    InputSwitchModule,
    InputMaskModule,
    InputTextModule,
    InputTextareaModule,
    ButtonsModule,
    PasswordModule,
    DividerModule,
  ],
  declarations: [CheckboxComponent, InputCcaComponent, PasswordCcaComponent],
  exports: [CheckboxComponent, InputCcaComponent, PasswordCcaComponent],
})
export class InputModule {}
