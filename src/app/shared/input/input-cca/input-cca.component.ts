import { Component, Input, OnInit } from '@angular/core';
import { patternEmail } from '@core/models/pattern';
import { IDataType } from '@core/models/inputs';

@Component({
  selector: 'cca-input',
  templateUrl: './input-cca.component.html',
  styleUrls: ['./input-cca.component.scss'],
})
export class InputCcaComponent implements OnInit {
  @Input()
  dataParams: IDataType = new IDataType();

  constructor() {}

  ngOnInit() {}

  checkEmailValidity() {
    const emailRegex = patternEmail;
    this.dataParams.valid = emailRegex.test(this.dataParams.value);
  }

  checkValidity() {
    if (this.dataParams.value.trim() === '') {
      this.dataParams.valid = false;
    } else {
      this.dataParams.valid = true;
    }
  }
}
