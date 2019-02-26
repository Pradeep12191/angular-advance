import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
    selector: '[appTest]'
})
export class TestDirective {
    private _temp;
    @Input() set appTest(flag) {
        if (flag) {
            this.v.clear();
            this.v.createEmbeddedView(this.t);
        } else {
            this.v.clear();
            this.v.createEmbeddedView(this._temp);
        }
    }

    @Input() set appTestTemp(temp) {
        this._temp = temp;
    }

    constructor(
        private v: ViewContainerRef,
        private t: TemplateRef<any>
    ) {

    }
}
