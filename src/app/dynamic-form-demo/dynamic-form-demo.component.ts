import { Component, OnInit } from '@angular/core';
import { Control } from './control.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AddControlDialogComponent } from './add-control-dialog/add-control-dialog.component';

const data = require('./data.json');

declare var require;

@Component({
  selector: 'app-dynamic-form-demo',
  templateUrl: './dynamic-form-demo.component.html',
  styleUrls: ['./dynamic-form-demo.component.css']
})
export class DynamicFormDemoComponent implements OnInit {

  public controlsConfig: Control[] = [];
  public formControlConfig: Control[] = [];
  public form: FormGroup;
  public submitted;
  private _controlCount = 0;
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog
  ) { }

  get dynamicFormGroup() {
    return this.form.get('dynamicControls') as FormGroup;
  }

  ngOnInit() {
    this.formControlConfig = [...data];
    const timer = setInterval(() => {
      if (data[this._controlCount]) {
        this.controlsConfig.push(data[this._controlCount]);
        this._controlCount++;
      } else {
        clearInterval(timer);
      }
    }, 1000);
    this.form = this.fb.group({
      dynamicControls: this.generateDynamicFormGroup(),
      department: '' // this is not part of dynamic control, but still exists as part of form.
    });
  }

  public onSubmit() {
    console.log(this.form.value);
    this.submitted = true;
  }

  public addControlDialog() {
    const dialogRef = this.dialog.open(AddControlDialogComponent,
      { data: { config: this.controlsConfig } }
    );
    dialogRef.afterClosed().subscribe((config: Control) => {
      console.log(config);
      if (config) {
        this.dynamicFormGroup.addControl(config.ctrlName, this.fb.control(''));
        this.controlsConfig.push(config);
      }
    });
  }

  private generateDynamicFormGroup() {
    const group = this.fb.group({});
    this.formControlConfig.forEach((ctrlConfig) => {
      group.addControl(ctrlConfig.ctrlName, this.fb.control(ctrlConfig.defaultValue));
    });
    return group;
  }

}
