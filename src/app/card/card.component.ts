import { Component, OnInit, Input, Inject, Optional } from '@angular/core';
import { CARD_DATA } from '../ovelay-c/card-data.token';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
   @Optional() @Inject(CARD_DATA) public data
  ) { }
  // @Input() data;
  ngOnInit() {
  }

}
