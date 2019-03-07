import { Component, OnInit } from '@angular/core';
const data = require('./cards.json');

declare var require;

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards = data;
  constructor() { }

  ngOnInit() {
  }

}
