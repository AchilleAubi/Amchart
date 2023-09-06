import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cca-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() sidebarVisible: boolean = false;
  @Input() position: string = 'left';
  @Input() styleClass: string = '';
  @Input() full: boolean = false;

  constructor() {}

  ngOnInit() {}
}
