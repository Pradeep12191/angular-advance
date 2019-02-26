import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
    selector: '[appRepeat]'
})
export class RepeatDirective {
    // tslint:disable-next-line:no-input-rename
    private _items: any[];

    // tslint:disable-next-line:no-input-rename
    @Input('appRepeat') repeat;

    @Input('appRepeatOf') set items(items) {
        this._items = items;
        if (this._items) {
            this._items.forEach((item, index) => {
                this.vc.createEmbeddedView(this.tr,
                    {
                        $implicit: item,
                        index,
                        default: 'from diretive'
                    }, index
                );
            });
        }
    }

    constructor(
        private vc: ViewContainerRef,
        private tr: TemplateRef<any>
    ) {

    }

}
