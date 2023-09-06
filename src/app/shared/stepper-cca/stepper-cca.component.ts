import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'cca-stepper',
  templateUrl: './stepper-cca.component.html',
  styleUrls: ['./stepper-cca.component.scss'],
})
export class StepperCcaComponent implements OnInit {
  @Input() type: string = '';
  @Input() items: MenuItem[] = [];
  @Output() action = new EventEmitter<string>();

  maxItems: number = 0;
  minItems: number = 0;

  activeIndex: number = 0;

  constructor() {}

  ngOnInit() {
    this.maxItems = this.items.length - 1;
    this.minItems = 0;
  }

  stepsAction(value: any) {
    this.action.emit(value);
  }

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
  }

  updateIndex(increment: boolean) {
    if (increment) {
      this.activeIndex += 1;
    } else {
      this.activeIndex -= 1;
    }
  }
}
