import { Directive, Input, ViewContainerRef, OnInit, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { AnimationBuilder, style, transition, animate } from '@angular/animations';
import { InputComponent } from './input/input.component';
import { Control } from '../control.model';
import { Subject } from 'rxjs';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit, OnDestroy {
    @Input() config: Control;
    @Input() form;
    components = {
        input: InputComponent
    };
    constructor(
        private vc: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        private animationBuilder: AnimationBuilder
    ) {

    }

    ngOnDestroy() {
        this.vc.clear();
    }

    ngOnInit() {
        const comp = this.components[this.config.ty];
        const compFactory = this.componentFactoryResolver.resolveComponentFactory<InputComponent>(comp);
        const compRef = this.vc.createComponent(compFactory);

        const enterFactory = this.createAnimation([
            style({ opacity: 0 }),
            animate('1s'),
        ]);
        const enterPlayer = enterFactory.create(compRef.location.nativeElement);
        enterPlayer.play();

        compRef.instance.form = this.form;
        compRef.instance.config = this.config;
        compRef.instance.removeComponent.subscribe(() => {
            const factory = this.createAnimation([
                animate('1s', style({ opacity: 0 })),
            ]);
            const player = factory.create(compRef.location.nativeElement);
            player.onDone(() => {
                this.vc.clear();
            });
            player.play();
        });
    }

    createAnimation(animation) {
        return this.animationBuilder.build(animation);
    }
}
