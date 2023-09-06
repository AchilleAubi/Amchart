import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'cca-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  tooltipContent = `
    Directives : matTooltipClass="tooltip-basic" [matTooltip]="tooltipContent"
    <p>Voici un exemple de <em>tooltip</em> ou <em>infobules</em>
      Ici on a utilisé du html pour le contenu du tooltip
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  `;

  constructor() { }

  ngOnInit() { }
}
