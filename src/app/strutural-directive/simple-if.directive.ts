import { Directive, Input, ViewContainerRef, TemplateRef } from "@angular/core";

@Directive({
    selector: '[appSimpleIf]'
})
export class SimpleIfDirective {

    constructor(
        private vc: ViewContainerRef,
        private templateRef: TemplateRef<any>
    ) {

    }
    @Input() set appSimpleIf(condition) {
        this.vc.clear();
        if (condition) {
            this.vc.createEmbeddedView(this.templateRef);
        }
    }
}
