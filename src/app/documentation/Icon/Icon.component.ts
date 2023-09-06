import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cca-Icon',
  templateUrl: './Icon.component.html',
  styleUrls: ['./Icon.component.scss'],
})
export class IconComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  ouvrirURL() {
    const url = 'https://www.primefaces.org/diamond/icons.xhtml';
    window.open(url, '_blank');
  }
}
