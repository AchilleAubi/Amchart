import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'cca-menu',
  templateUrl: './menu-cca.component.html',
  styleUrls: ['./menu-cca.component.scss'],
})
export class MenuCcaComponent implements OnInit {
  @Input() megaMenuitems!: MegaMenuItem[];
  @Input() items!: MenuItem[];
  @Input() popup: boolean = false;
  @Input() multiple: boolean = false;
  @Input() type!: string;
  @Input() menuWidth!: string;
  @Output() menuAction = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  action(value: any) {
    this.menuAction.emit(value);
  }

  handleIconClick(event: Event, item: MenuItem) {
    event.preventDefault(); // Empêcher la propagation de l'événement si nécessaire
    if (item.command) {
      item.command({ originalEvent: event });
    }
    this.menuAction.emit(item.label); // Émettre l'action associée à l'icône
  }
}
