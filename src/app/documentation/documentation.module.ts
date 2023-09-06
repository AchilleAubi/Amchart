import { InputComponent } from './Input/Input.component';
import { NgModule } from '@angular/core';
import { DocumentationComponent } from './documentation.component';
import { BoutonComponent } from './Bouton/Bouton.component';
import { IconComponent } from './Icon/Icon.component';
import { FontComponent } from './Font/Font.component';
import { SelectComponent } from './select/select.component';
import { ToggleComponent } from './toggle/toggle.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MenuComponent } from './menu/menu.component';
import { TagComponent } from './Tag/Tag.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ToolbarComponent } from './Toolbar/Toolbar.component';
import { StepperComponent } from './stepper/stepper.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { UploadComponent } from './upload/upload.component';
import { SidemenuComponent } from './layout/sidemenu/sidemenu.component';
import { AlertComponentComponent } from './alert-component/alert-component.component';
import { CoreModule } from '../core.module';
import { GraphComponent } from './graph/graph.component';
import { LoaderComponent } from './layout/loader/loader.component';
import { SidebarDemoComponent } from './sidebar-demo/sidebar-demo.component';
import { MapsComponent } from './maps/maps.component';
import { TableauComponent } from './tableau/tableau.component';
import { DocPasswordComponent } from './doc-password/doc-password.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DividerModule } from 'primeng/divider';
import { MessageService } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ColorPickComponent } from './color-pick/color-pick.component';
import { DocPanelComponent } from './doc-panel/doc-panel.component';
import { ToastService } from '../core/services/toast/toast.service';
import { TabulationComponent } from './tabulation/tabulation.component';
import { CouleurComponent } from './couleur/couleur.component';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';
import { AlertModule } from '@shared/alert/alert.module';

@NgModule({
  declarations: [
    TabulationComponent,
    DocPanelComponent,
    ColorPickComponent,
    TableauComponent,
    MapsComponent,
    DocumentationComponent,
    BoutonComponent,
    IconComponent,
    InputComponent,
    FontComponent,
    SelectComponent,
    ToggleComponent,
    CheckboxComponent,
    MenuComponent,
    TagComponent,
    TooltipComponent,
    ToolbarComponent,
    SidebarDemoComponent,
    StepperComponent,
    SnackbarComponent,
    PaginationComponent,
    UploadComponent,
    SidemenuComponent,
    NavbarComponent,
    ModalComponent,
    AlertComponentComponent,
    GraphComponent,
    LoaderComponent,
    DocPasswordComponent,
    ModalFormComponent,
    CouleurComponent,
  ],
  imports: [
    AlertModule,
    CoreModule,
    ButtonModule,
    CardModule,
    DialogModule,
    TooltipModule,
    SelectButtonModule,
    ProgressSpinnerModule,
    DividerModule,
    RadioButtonModule,
  ],
  // providers necessaire pour le toast
  providers: [MessageService, ToastService],
})
export class DocumentationModule { }
