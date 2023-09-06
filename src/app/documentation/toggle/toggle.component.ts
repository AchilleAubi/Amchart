import { Component, OnInit } from '@angular/core';
import { ToggleService } from '@core/services/toggle/toggle.service';
@Component({
  selector: 'cca-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  primaryvalue!: number;
  secondaryvalue!: number;
  successvalue!: number;
  infovalue!: number;

  primaryOptions: { name: string; value: number }[] =
    this.toggleService.primaryOptions;
  secondaryOptions: { name: string; value: number }[] =
    this.toggleService.secondaryOptions;
  successOptions: { name: string; value: number }[] =
    this.toggleService.successOptions;
  InfoOptions: { name: string; value: number }[] =
    this.toggleService.InfoOptions;
  errorDoubleOptions: { name: string; value: number }[] =
    this.toggleService.errorDoubleOptions;
  warningDoubleOptions: { name: string; value: number }[] =
    this.toggleService.warningDoubleOptions;

  constructor(private toggleService: ToggleService) {}

  ngOnInit() {}
}
