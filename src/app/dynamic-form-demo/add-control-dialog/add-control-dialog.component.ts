import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Control } from '../control.model';

@Component({
  selector: 'app-add-control-dialog',
  templateUrl: './add-control-dialog.component.html',
  styleUrls: ['./add-control-dialog.component.css']
})
export class AddControlDialogComponent implements OnInit {
  controlTypes = ['input', 'select'];
  addControlForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddControlDialogComponent>
  ) { }

  ngOnInit() {
    this.addControlForm = this.fb.group({
      controlName: '',
      controlType: '',
    });
  }

  addControl() {
    const controlConfig: Control = {
      ctrlName: this.addControlForm.value.controlName,
      ty: this.addControlForm.value.controlType,
      defaultValue: ''
    };
    this.dialogRef.close(controlConfig);
  }

}
