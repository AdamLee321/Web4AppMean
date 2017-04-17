/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EasterEggComponent } from './easter-egg.component';

describe('EasterEggComponent', () => {
  let component: EasterEggComponent;
  let fixture: ComponentFixture<EasterEggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasterEggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasterEggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
