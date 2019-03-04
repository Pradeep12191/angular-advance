import { Directive, Input, ViewContainerRef, TemplateRef } from "@angular/core";

@Directive({
    selector: '[appSimpleIf]'
})
export class SimpleIfDirective {
    private _elseTempRef: TemplateRef<any>;
    constructor(
        private vc: ViewContainerRef,
        private templateRef: TemplateRef<any>
    ) {

    }

    @Input() set appSimpleIfElse(temp) {
        this._elseTempRef = temp;
    }

    @Input() set appSimpleIf(condition) {
        this.vc.clear();
        if (condition) {
            this.vc.createEmbeddedView(this.templateRef);
        } else {
            if (this._elseTempRef) {
                this.vc.createEmbeddedView(this._elseTempRef);
            }
        }
    }
}
