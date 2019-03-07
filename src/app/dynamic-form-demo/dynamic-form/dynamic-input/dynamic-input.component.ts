import { Component, OnInit, Input } from '@angular/core';
import { Control } from '../../control.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.css']
})
export class DynamicInputComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() config: Control;
  constructor() { }

  ngOnInit() {
  }

}
