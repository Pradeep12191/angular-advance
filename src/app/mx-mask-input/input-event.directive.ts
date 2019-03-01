import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[inputEvent]'
})
export class InputEventDirective {

    @HostListener('input', ['$event']) oninput(e: KeyboardEvent) {
        const el = e.target as HTMLInputElement;
        console.log('el.selectionStart', el.selectionStart);
        // console.log(e.target);
    }
}