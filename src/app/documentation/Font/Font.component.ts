import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cca-Font',
  templateUrl: './Font.component.html',
  styleUrls: ['./Font.component.scss'],
})
export class FontComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  ShowTailwind() {
    window.open('https://tailwindcss.com/docs/font-family');
  }
}
