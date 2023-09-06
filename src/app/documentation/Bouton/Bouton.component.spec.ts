/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BoutonComponent } from './Bouton.component';

describe('BoutonComponent', () => {
  let component: BoutonComponent;
  let fixture: ComponentFixture<BoutonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
