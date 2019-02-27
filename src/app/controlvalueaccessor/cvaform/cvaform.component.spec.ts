/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CvaformComponent } from './cvaform.component';

describe('CvaformComponent', () => {
  let component: CvaformComponent;
  let fixture: ComponentFixture<CvaformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvaformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
