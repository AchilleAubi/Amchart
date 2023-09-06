/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TableauService } from './tableau.service';

describe('Service: Tableau', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableauService],
    });
  });

  it('should ...', inject([TableauService], (service: TableauService) => {
    expect(service).toBeTruthy();
  }));
});
