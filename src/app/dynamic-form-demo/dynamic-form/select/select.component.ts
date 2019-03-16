import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Control } from '../../control.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styles: []
})
export class SelectComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() config: Control;
  constructor() { }

  ngOnInit() {
  }

}
