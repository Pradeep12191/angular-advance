import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import RepeatContext from './repeat-context.class';

@Directive({
    selector: '[appRepeat]'
})
export class RepeatDirective {
    // tslint:disable-next-line:no-input-rename
    private _items: any[];

    // tslint:disable-next-line:no-input-rename
    @Input('appRepeat') repeat;

    @Input('appRepeatIn') set items(items: any[]) {
        this._items = items; // not really requied to assign
        if (this._items) {
            this._items.forEach((item, index) => {
                const odd = index % 2 !== 0;
                const even = !odd;
                const last = this._items.length === index + 1;
                const first = index === 0;
                this.vc.createEmbeddedView(this.templateRef,
                    new RepeatContext(item, index, odd, even, last, first),
                    index
                );
            });
        }
    }

    constructor(
        private vc: ViewContainerRef,
        private templateRef: TemplateRef<any>
    ) {

    }

}
