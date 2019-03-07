import { Component, OnInit, ViewChild, ViewContainerRef, Input, ComponentFactoryResolver } from '@angular/core';
import { Control } from '../control.model';
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @ViewChild('inject', { read: ViewContainerRef }) dynamicComponentRender: ViewContainerRef;
  @Input() config: Control[];
  @Input() form: FormGroup;

  constructor(
    private factory: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    if (this.config && this.config) {
      this.config.forEach((c, index) => {
        const comp = this.getComponent(c.ty);
        const compFactory = this.factory.resolveComponentFactory(comp);
        const compRef = this.dynamicComponentRender.createComponent(compFactory);
        compRef.instance.form = this.form;
        compRef.instance.config = c;
      });
    }
  }

  private getComponent(componentType) {
    switch (componentType) {
      case 'input':
        return DynamicInputComponent;

      default:
        break;
    }
  }

}
