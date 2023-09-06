import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCcaComponent } from './menu-cca.component';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TabMenuModule } from 'primeng/tabmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { OverlayPanelCcaModule } from "../overlay-panel-cca/overlay-panel-cca.module";

@NgModule({
  declarations: [MenuCcaComponent],
  exports: [MenuCcaComponent],
  imports: [
    CommonModule,
    MenuModule,
    MenubarModule,
    MegaMenuModule,
    PanelMenuModule,
    TabMenuModule,
    OverlayPanelModule,
    OverlayPanelCcaModule
  ]
})
export class MenuCcaModule { }
