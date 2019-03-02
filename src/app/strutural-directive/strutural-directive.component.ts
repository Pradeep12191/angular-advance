import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strutural-directive',
  templateUrl: './strutural-directive.component.html',
  styleUrls: ['./strutural-directive.component.css']
})
export class StruturalDirectiveComponent implements OnInit {

  show = false;
  showTemplate = false;
  employees;
  constructor() { }

  ngOnInit() {
    this.employees = [
      {name: 'John', salary: 10000, age: 28, gender: 'male'},
      {name: 'Harry', salary: 10000, age: 28, gender: 'male'},
      {name: 'Bob', salary: 10000, age: 28, gender: 'male'},
      {name: 'Marry', salary: 10000, age: 28, gender: 'female'},
      {name: 'Stella', salary: 10000, age: 28, gender: 'female'},
      {name: 'Ron', salary: 10000, age: 28, gender: 'male'}
    ];
  }

}
