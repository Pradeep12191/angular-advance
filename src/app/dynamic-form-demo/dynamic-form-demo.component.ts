import { Component, OnInit } from '@angular/core';
import { Control } from './control.model';
import { FormBuilder, FormGroup } from '@angular/forms';

const data = require('./data.json');

declare var require;

@Component({
  selector: 'app-dynamic-form-demo',
  templateUrl: './dynamic-form-demo.component.html',
  styleUrls: ['./dynamic-form-demo.component.css']
})
export class DynamicFormDemoComponent implements OnInit {

  public controlsConfig: Control[];
  public form: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.controlsConfig = data;
    this.form = this.fb.group({
      dynamicControls: this.dynamicFormGroup()
    });
  }

  public logFormData() {
    console.log(this.form.value);
  }

  private dynamicFormGroup() {
    const group = [];
    this.controlsConfig.forEach((ctrlConfig) => {
      group[ctrlConfig.ctrlName] = this.fb.control(ctrlConfig.defaultValue);
    });
    return this.fb.group(group);
  }

}
