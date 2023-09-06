import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './documentation.component';
import { InputComponent } from './Input/Input.component';
import { IconComponent } from './Icon/Icon.component';
import { BoutonComponent } from './Bouton/Bouton.component';
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
import { CouleurComponent } from './couleur/couleur.component';
import { UploadComponent } from './upload/upload.component';
import { ModalComponent } from './modal/modal.component';
import { AlertComponentComponent } from './alert-component/alert-component.component';
import { GraphComponent } from './graph/graph.component';
import { LoaderComponent } from './layout/loader/loader.component';
import { SidebarDemoComponent } from './sidebar-demo/sidebar-demo.component';
import { MapsComponent } from './maps/maps.component';
import { TableauComponent } from './tableau/tableau.component';
import { DocPasswordComponent } from './doc-password/doc-password.component';
import { ColorPickComponent } from './color-pick/color-pick.component';
import { DocPanelComponent } from './doc-panel/doc-panel.component';
import { TabulationComponent } from './tabulation/tabulation.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentationComponent,
    children: [
      {
        path: '',
        redirectTo: 'couleur',
        pathMatch: 'full',
      },
      {
        path: 'input', // child route path
        component: InputComponent, // child route component that the router renders
      },
      {
        path: 'password', // child route path
        component: DocPasswordComponent, // child route component that the router renders
      },
      {
        path: 'tableau', // child route path
        component: TableauComponent, // child route component that the router renders
      },
      {
        path: 'bouton', // child route path
        component: BoutonComponent, // child route component that the router renders
      },
      {
        path: 'icon', // child route path
        component: IconComponent, // child route component that the router renders
      },
      {
        path: 'font', // child route path
        component: FontComponent, // child route component that the router renders
      },
      {
        path: 'select', // child route path
        component: SelectComponent, // child route component that the router renders
      },
      {
        path: 'toggle', // child route path
        component: ToggleComponent, // child route component that the router renders
      },
      {
        path: 'checkbox', // child route path
        component: CheckboxComponent, // child route component that the router renders
      },
      {
        path: 'menu', // child route path
        component: MenuComponent, // child route component that the router renders
      },
      {
        path: 'tag', // child route path
        component: TagComponent, // child route component that the router renders
      },
      {
        path: 'tooltip', // child route path
        component: TooltipComponent, // child route component that the router renders
      },
      {
        path: 'toolbar', // child route path
        component: ToolbarComponent, // child route component that the router renders
      },
      {
        path: 'sidebar', // child route path
        component: SidebarDemoComponent, // child route component that the router renders
      },
      {
        path: 'tabs', // child route path
        component: TabulationComponent, // child route component that the router renders
      },
      {
        path: 'stepper', // child route path
        component: StepperComponent, // child route component that the router renders
      },
      {
        path: 'panel', // child route path
        component: DocPanelComponent, // child route component that the router renders
      },
      {
        path: 'color-picker', // child route path
        component: ColorPickComponent, // child route component that the router renders
      },
      {
        path: 'snackbar', // child route path
        component: SnackbarComponent, // child route component that the router renders
      },
      {
        path: 'pagination', // child route path
        component: PaginationComponent, // child route component that the router renders
      },
      {
        path: 'maps', // child route path
        component: MapsComponent, // child route component that the router renders
      },
      {
        path: 'graphique', // child route path
        component: GraphComponent, // child route component that the router renders
      },
      {
        path: 'couleur', // child route path
        component: CouleurComponent, // child route component that the router renders
      },
      {
        path: 'uploadmultiples', // child route path
        component: UploadComponent, // child route component that the router renders
      },
      {
        path: 'modal', // child route path
        component: ModalComponent, // child route component that the router renders
      },
      {
        path: 'alert', // child route path
        component: AlertComponentComponent, // child route component that the router renders
      },
      {
        path: 'loader', // child route path
        component: LoaderComponent, // child route component that the router renders
      },
      { path: '**', redirectTo: 'documentation' },
    ],
  },
  { path: '**', redirectTo: 'documentation' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentationRoutingModule {}
