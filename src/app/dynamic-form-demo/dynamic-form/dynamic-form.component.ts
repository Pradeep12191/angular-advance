import { Component, OnInit, Input } from '@angular/core';
import { Control } from '../control.model';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() config: Control[];
  @Input() form: FormGroup;

  constructor(
  ) { }

  ngOnInit() {
  }

}
