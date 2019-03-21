import { Directive, Input, OnInit, Inject, forwardRef, HostListener, HostBinding } from '@angular/core';
import { BgContentAnimationComponent } from './bg-content-animation.component';


@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[bgArrow]'
})
export class ArrowDirective {

    @Input('bgArrow') arrow: 'right' | 'left';

    @HostListener('click') onClick() {
        if (this.arrow === 'right') {
            this.bgComp.goToNext();
        } else {
            this.bgComp.gotToPrevious();
        }
    }

    @HostBinding('disabled') get disabled() {
        return this.bgComp.disableArrow(this.arrow);
    }

    constructor(
        @Inject(forwardRef(() => BgContentAnimationComponent)) private bgComp: BgContentAnimationComponent
    ) {

    }
}
