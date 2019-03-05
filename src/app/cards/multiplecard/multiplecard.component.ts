import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multiplecard',
  templateUrl: './multiplecard.component.html',
  styleUrls: ['./multiplecard.component.scss']
})
export class MultiplecardComponent implements OnInit {
  @Input() carddata;
  data = '';
  i = 0;
  constructor() { }

  ngOnInit() {
    console.log(this.carddata);
    this.data = this.carddata[this.i];
  }
  toggleHandler() {
    this.i = (this.i === 0 ) ? 1 : 0;
    console.log(this.i);
    this.data = this.carddata[this.i];
  }
}
