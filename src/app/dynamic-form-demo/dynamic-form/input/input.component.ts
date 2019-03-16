import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { Control } from '../../control.model';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [`
  .mg-lf-20{
    margin-left: 20px
  }
  :host{
    display: block
  }
  `]
})
export class InputComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() config: Control;
  @Input() removeComponent = new Subject<any>();
  @ViewChild('formGroup', { read: ViewContainerRef }) group: ViewContainerRef;
  constructor() { }

  ngOnInit() {
  }

  removeControl(ctrlName) {
    this.form.removeControl(ctrlName);
    this.removeComponent.next();
  }

}
