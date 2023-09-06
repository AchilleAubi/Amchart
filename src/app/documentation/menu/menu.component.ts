import { Component, OnInit } from '@angular/core';
import { MenuService } from '@core/services/menu/menu.service';
import { MegaMenuItem, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'cca-menu-doc',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MessageService],
})
export class MenuComponent implements OnInit {
  megaMenu: MegaMenuItem[] = [];
  tabMenu: MenuItem[] = [];
  items: MenuItem[] = [];
  data: MenuItem[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.megaMenu = this.menuService.getMegaMenu();
    this.tabMenu = this.menuService.getTabMenu();
    this.items = this.menuService.getItems();
    this.data = this.menuService.getData();
  }

  action(value: any) {
    console.log(value, 'value');
  }
}
