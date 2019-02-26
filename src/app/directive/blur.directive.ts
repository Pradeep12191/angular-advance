import { Directive, HostListener } from '@angular/core';
import { NgControl, NgForm, NgModel, FormControl } from '@angular/forms';

@Directive({
    selector: '[appBlur]'
})
export class BlurDirective {


    constructor(
        private ctrl: NgControl
    ) {

    }

    @HostListener('blur', ['$event']) onblur(e: Event) {
        (e.target as HTMLInputElement).value = 'blured';
        // this.ctrl.viewToModelUpdate('blured');
        this.ctrl.control.setValue('blured');
    }
}
