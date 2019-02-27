import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-controlvalueaccessor',
  templateUrl: './controlvalueaccessor.component.html',
  styleUrls: ['./controlvalueaccessor.component.css']
})
export class ControlvalueaccessorComponent implements OnInit {
  cvaModel;
  reactiveForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.reactiveForm = this._formBuilder.group({
      cva: ['asdasdas', Validators.required]
    });
  }

}
