import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  public config;
  public model: { [name: string]: string };
  constructor() { }

  ngOnInit() {
    this.model = {
      number: ''
    };
    this.config = {
      details: {
        enableSymbol: false,
        errorMessage: { req: 'Required', min: 'Minerror', max: 'Maxerror', minLen: 'Minimun Amount is required' },
        id: 'number',
        inputType: 'number',
        maxLength: '12',
        maxValue: '1500',
        minLength: '2',
        minValue: '500',
        name: 'number',
        placeholder: ' Type number ',
        required: false,
        selDat: []
      },
      ty: 'ti'
    };
  }
}
