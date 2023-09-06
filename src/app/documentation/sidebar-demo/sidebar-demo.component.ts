import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cca-sidebar-demo',
  templateUrl: './sidebar-demo.component.html',
  styleUrls: ['./sidebar-demo.component.scss'],
})
export class SidebarDemoComponent implements OnInit {
  left: boolean = false;
  right: boolean = false;
  top: boolean = false;
  bottom: boolean = false;
  full: boolean = false;

  constructor() {}

  ngOnInit() {}
}
