import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocumentationRoutingModule } from './documentation/documentation-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { TabViewModule } from 'primeng/tabview';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { OverlayPanelCcaModule } from './shared/overlay-panel-cca/overlay-panel-cca.module';
import { PanelCcaModule } from './shared/panel-cca/panel-cca.module';
import { TabsCcaModule } from './shared/Tabs-cca/Tabs-cca.module';
import { StepperCcaModule } from './shared/stepper-cca/stepper-cca.module';
import { MenuCcaModule } from './shared/menu-cca/menu-cca.module';
import { ToastCcaModule } from './shared/toast-cca/toast-cca.module';
import { ColorSelectModule } from './shared/color-select/color-select.module';
import { TagCcaModule } from './shared/tag-cca/tag-cca.module';
import { SelectModule } from './shared/select/select.module';
import { ButtonsModule } from './shared/buttons/buttons.module';
import { IconModule } from './shared/icon/icon.module';
import { ToolbarModulecca } from './shared/toolbar/toolbar.module';
import { SidebarModulecca } from './shared/sidebar/sidebar.module';
import { PaginatorModuleCca } from './shared/paginator/paginator.module';
import { DragDropFileUploadModule } from './shared/drag-drop-file-upload/drag-drop-file-upload.module';
import { AlertModule } from './shared/alert/alert.module';
import { GraphiqueModule } from './shared/graphique/graphique.module';
import { InputModule } from './shared/input/input.module';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  imports: [
    MenuModule,
    TabViewModule,
    OverlayPanelCcaModule,
    PanelCcaModule,
    TabsCcaModule,
    StepperCcaModule,
    ToastModule,
    DividerModule,
    MenuCcaModule,
    ToastCcaModule,
    ColorSelectModule,
    TagCcaModule,
    TableModule,
    PasswordModule,
    DropdownModule,
    SelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    InputSwitchModule,
    HttpClientModule,
    HttpClientJsonpModule,
    GoogleMapsModule,
    CommonModule,
    DocumentationRoutingModule,
    ButtonsModule,
    IconModule,
    FormsModule,
    ReactiveFormsModule,
    TagModule,
    ToolbarModulecca,
    SidebarModulecca,
    PaginatorModuleCca,
    DragDropFileUploadModule,
    AlertModule,
    GraphiqueModule,
    InputModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    PaginatorModule,
  ],
  exports: [
    InputModule,
    MenuModule,
    TabViewModule,
    OverlayPanelCcaModule,
    PanelCcaModule,
    TabsCcaModule,
    StepperCcaModule,
    ToastModule,
    DividerModule,
    MenuCcaModule,
    ToastCcaModule,
    ColorSelectModule,
    TagCcaModule,
    TableModule,
    PasswordModule,
    DropdownModule,
    SelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    InputSwitchModule,
    HttpClientModule,
    HttpClientJsonpModule,
    GoogleMapsModule,
    CommonModule,
    DocumentationRoutingModule,
    ButtonsModule,
    IconModule,
    FormsModule,
    ReactiveFormsModule,
    TagModule,
    ToolbarModulecca,
    SidebarModulecca,
    PaginatorModuleCca,
    DragDropFileUploadModule,
    AlertModule,
    GraphiqueModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    PaginatorModule,
  ],
})
export class CoreModule { }
