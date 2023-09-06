import { Component } from '@angular/core';
import { menus } from './menu';
@Component({
  selector: 'cca-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent {
  Menus = menus;
}
