/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StepperService } from './stepper.service';

describe('Service: Stepper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StepperService],
    });
  });

  it('should ...', inject([StepperService], (service: StepperService) => {
    expect(service).toBeTruthy();
  }));
});
