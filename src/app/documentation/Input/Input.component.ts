import { Component, OnInit } from '@angular/core';
import { Moment } from 'moment';

@Component({
  selector: 'cca-Input',
  templateUrl: './Input.component.html',
  styleUrls: ['./Input.component.scss'],
})
export class InputComponent implements OnInit {
  inputValue: string = '';
  inputValueText: string = '';
  inputOutValueText: string = '';
  inputOutValueSimple: string = '';

  lastInputValue: string = '';

  onInputValueChange(value: string) {
    this.lastInputValue = value;
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  selectedDate!: Moment;
  dateFormat = "'YYYY-MM-DD'";

  onDateSelected(date: Moment) {
    this.selectedDate = date;
    console.log(this.selectedDate.format(this.dateFormat)); // Utilisez la date formatée selon vos besoins
  }

  constructor() {}

  onInputValueChanged(value: string) {
    this.inputValue = value;
    // Faites autre chose avec la valeur de l'input
  }

  onInputValueChangedtext(value: string) {
    this.inputValueText = value;
    // Faites autre chose avec la valeur de l'input
  }

  onInputValueChangedSimple(value: string) {
    this.inputOutValueSimple = value;
    // Faites autre chose avec la valeur de l'input
  }

  onInputValueChangedOutText(value: string) {
    this.inputOutValueText = value;
    // Faites autre chose avec la valeur de l'input
  }

  ngOnInit() {}
}
