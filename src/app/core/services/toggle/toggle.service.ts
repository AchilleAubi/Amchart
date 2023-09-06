import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleService {
  constructor() {}
  primaryOptions: { name: string; value: number }[] = [
    { name: 'Primary 1', value: 1 },
    { name: 'Primary 2', value: 2 },
    { name: 'Primary 3', value: 3 },
  ];
  secondaryOptions: { name: string; value: number }[] = [
    { name: 'Secondary 1', value: 1 },
    { name: 'Secondary 2', value: 2 },
    { name: 'Secondary 3', value: 3 },
  ];
  successOptions: { name: string; value: number }[] = [
    { name: 'Success 1', value: 1 },
    { name: 'Success 2', value: 2 },
    { name: 'Success 3', value: 3 },
  ];
  InfoOptions: { name: string; value: number }[] = [
    { name: 'Info 1', value: 1 },
    { name: 'Info 2', value: 2 },
    { name: 'Info 3', value: 3 },
  ];
  errorDoubleOptions: { name: string; value: number }[] = [
    { name: 'Error 1', value: 1 },
    { name: 'Error 2', value: 2 },
  ];
  warningDoubleOptions: { name: string; value: number }[] = [
    { name: 'Warning 1', value: 1 },
    { name: 'Warning 2', value: 2 },
  ];
}
