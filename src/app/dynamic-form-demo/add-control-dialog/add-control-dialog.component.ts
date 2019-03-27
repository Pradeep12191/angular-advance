import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';
import { MatDialogRef, MatSelectChange, MAT_DIALOG_DATA } from '@angular/material';
import { Control } from '../control.model';

@Component({
  selector: 'app-add-control-dialog',
  templateUrl: './add-control-dialog.component.html',
  styleUrls: ['./add-control-dialog.component.css']
})
export class AddControlDialogComponent implements OnInit {
  controlTypes = ['input', 'select'];
  addControlForm: FormGroup;
  controlNames: any[];

  get optionsFormArray() {
    return this.addControlForm.get('options') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddControlDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {
    this.addControlForm = this.fb.group({
      controlName: ['', [Validators.required, this.controlNameAleadyExist()]],
      controlType: ['', [Validators.required]],
      options: this.fb.array([])
    });
    this.controlNames = this.data.config.map((c) => c.ctrlName);
    console.log(this.controlNames);
  }

  addControl() {
    const controlConfig: Control = {
      ctrlName: this.addControlForm.value.controlName,
      ty: this.addControlForm.value.controlType,
      defaultValue: ''
    };
    this.dialogRef.close(controlConfig);
  }

  onControlTypeChange(e: MatSelectChange) {
    if (e.value === 'select') {
      this.optionsFormArray.push(this.fb.group({
        option: ['', [Validators.required]]
      }));
    }
  }

  addOption() {
    this.optionsFormArray.push(this.fb.group({
      option: ['', [Validators.required]]
    }));
  }

  controlNameAleadyExist() {
    return (c: AbstractControl) => {
      let ctrlName = null;
      if (c.value) {
        ctrlName = c.value.trim();
      }
      if (this.controlNames && this.controlNames.indexOf(ctrlName) === -1) {
        return null;
      }
      return {
        controlAlreadyExists: true
      };
    };

  }

  removeControl(index) {
    this.optionsFormArray.removeAt(index);
  }

}
