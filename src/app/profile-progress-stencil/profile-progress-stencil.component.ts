import { Component, OnInit } from '@angular/core';
import { DateAdapter, NativeDateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment, Moment } from 'moment';
import { FormControl } from '@angular/forms';

const moment = _rollupMoment || _moment;

const myFormats = {
  parse: {
    dateInput: 'DD MM YYYY'
  },
  display: {
    dateInput: 'DD MM YY',
    monthYearLabel: 'MMMM YY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  }
};

@Component({
  selector: 'app-profile-progress-stencil',
  templateUrl: './profile-progress-stencil.component.html',
  styleUrls: ['./profile-progress-stencil.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: myFormats }
  ]
})
export class ProfileProgressStencilComponent implements OnInit {
  date: FormControl;
  constructor() { }

  ngOnInit() {

    this.date = new FormControl(moment());
  }

  show() {
    console.log(this.date.value);
  }

}
