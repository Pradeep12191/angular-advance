import { Component, OnInit, forwardRef, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR  } from '@angular/forms';

@Component({
  selector: 'app-cvaform',
  templateUrl: './cvaform.component.html',
  styleUrls: ['./cvaform.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CvaformComponent),
    multi: true
  }]
})
export class CvaformComponent implements OnInit, ControlValueAccessor {
  @ViewChild('cvaId') cvaId: ElementRef;
  onChange = (data) => { };
  onTouched = () => { };

  constructor(private _renderer: Renderer2) { }

  ngOnInit() {
  }
  dataBind() {
    console.log('cvaId', this.cvaId.nativeElement.textContent);
    this.onChange(this.cvaId.nativeElement.textContent);
  }
  writeValue(obj: any): void {
    if (obj !== '') {
      const div = this.cvaId.nativeElement;
      this._renderer.setProperty(div, 'textContent', obj);
      this.onChange = obj;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // it will call when component is disabled
    console.log('isDisabled', isDisabled);
  }
}
