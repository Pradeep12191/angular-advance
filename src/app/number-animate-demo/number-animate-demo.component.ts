import { Component, ViewChild, ViewContainerRef, OnInit, TemplateRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { NumberTextDirective } from './number-text.directive';
import { AnimationBuilder, style, animate, AnimationPlayer } from '@angular/animations';

@Component({
    templateUrl: './number-animate-demo.component.html',
    styleUrls: ['./number-animate-demo.component.scss']
})
export class NumberAnimateDemoComponent implements OnInit, AfterViewInit {
    @ViewChild('numberHolder', { read: ViewContainerRef }) numberContainer: ViewContainerRef;
    @ViewChildren(NumberTextDirective, { read: TemplateRef }) numberTexts: QueryList<TemplateRef<NumberTextDirective>>;
    slides = [1, 2];
    activeEl;
    activeNumber;
    enterAnimtionPlayer: AnimationPlayer;
    leaveAnimtionPlayer: AnimationPlayer;

    constructor(
        private animationBuilder: AnimationBuilder,
    ) { }


    ngOnInit() {


        // setInterval(() => {

        //     this.numberContainer.clear();
        //     const numberTpl = this.numberTexts.toArray()[this.activeNumber];
        //     const slideRef = this.numberContainer.createEmbeddedView(numberTpl);
        //     // this.leaveAnimation()
        //     this.activeEl = slideRef.rootNodes[0];
        //     this.enterAnimation(slideRef.rootNodes[0]);
        //     this.activeNumber++;

        // }, 1000);
    }

    ngAfterViewInit() {
        this.activeNumber = 0;
        const el = this.numberTexts.toArray()[this.activeNumber];
        const elemRef = this.numberContainer.createEmbeddedView(el);
        this.activeEl = elemRef.rootNodes[0];
        this.enterAnimation(this.activeEl);
    }

    createNumber() {

    }

    enterAnimation(el) {
        if (this.enterAnimtionPlayer) { this.enterAnimtionPlayer.destroy(); }
        const builder = this.animationBuilder.build(
            [
                style({ transform: 'translateY(-100%)' }),
                animate(1000)
            ]);
        this.enterAnimtionPlayer = builder.create(el);

        this.enterAnimtionPlayer.onDone(() => {
            setTimeout(() => {
                this.leaveAnimation(this.activeEl);
                this.activeNumber++;
                if (this.activeNumber > 9) {
                    this.activeNumber = 0;
                }
                const elem = this.numberTexts.toArray()[this.activeNumber];
                // this.numberContainer.clear();
                const eleRef = this.numberContainer.createEmbeddedView(elem);
                this.activeEl = eleRef.rootNodes[0];
                this.enterAnimation(this.activeEl);
            }, 1000)

        });
        this.enterAnimtionPlayer.play();
    }

    leaveAnimation(el) {
        if (this.leaveAnimtionPlayer) { this.leaveAnimtionPlayer.destroy(); }
        const builder = this.animationBuilder.build([
            // style({ transform: 'translateX(0%)' }),
            animate(1000, style({ transform: 'translateY(100%)', width: '100%' }))
        ]);
        this.leaveAnimtionPlayer = builder.create(this.activeEl);
        this.leaveAnimtionPlayer.onDone(() => {
            this.numberContainer.remove(0);
        });
        this.leaveAnimtionPlayer.play();
    }
}
