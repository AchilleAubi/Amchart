import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepperService {

  constructor() { }

  getItems() {
    return [
      {
        label: 'Personal',
        command: (event: any) => { }
      },
      {
        label: 'Seat',
        command: (event: any) => { }
      },
      {
        label: 'Payment',
        command: (event: any) => { }
      },
      {
        label: 'Confirmation',
        command: (event: any) => { }
      }
    ];
  }

}
