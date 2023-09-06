import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonToggleGroupComponent } from './button-toggle-group/button-toggle-group.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [ButtonToggleGroupComponent, ButtonsComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TooltipModule,
    SelectButtonModule,
    FormsModule,
  ],
  exports: [ButtonToggleGroupComponent, ButtonsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ButtonsModule {}
