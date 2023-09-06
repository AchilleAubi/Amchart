import { Component, OnInit } from '@angular/core';
import { StepperService } from '@core/services/stepper/stepper.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'cca-stepper-doc',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private stepperService: StepperService) {}

  ngOnInit() {
    this.items = this.stepperService.getItems();
  }

  stepperAction(value: string) {
    // action à chaque clique
  }
}
