import { Component, ViewChild, ViewContainerRef, OnInit, TemplateRef, ViewChildren, QueryList, AfterViewInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NumberTextDirective } from '../number-text.directive';
import { AnimationBuilder, style, animate, AnimationPlayer } from '@angular/animations';


const slideDown = {
    enter: [
        style({ transform: 'translateY(-100%)' }),
        animate(300)
    ],
    leave: [
        // style({ transform: 'translateX(0%)' }),
        animate(300, style({ transform: 'translateY(100%)' }))
    ]
}

const slideUp = {
    enter: [
        style({ transform: 'translateY(100%)' }),
        animate(300)
    ],
    leave: [
        // style({ transform: 'translateX(0%)' }),
        animate(300, style({ transform: 'translateY(-100%)' }))
    ]
}

@Component({
    selector: 'number-animate',
    templateUrl: './number-animate.component.html',
    styleUrls: ['./number-animate.component.scss']
})
export class NumberAnimateComponent implements AfterViewInit, OnChanges, OnInit {
    @ViewChild('numberHolder', { read: ViewContainerRef }) numberContainer: ViewContainerRef;
    @ViewChildren(NumberTextDirective, { read: TemplateRef }) numberTexts: QueryList<TemplateRef<NumberTextDirective>>;
    activeEl;
    @Input() value;
    @Input() total;
    activeNumber;
    commaFound = false;
    enterAnimtionPlayer: AnimationPlayer;
    leaveAnimtionPlayer: AnimationPlayer;



    constructor(
        private animationBuilder: AnimationBuilder,
    ) { }

    ngOnInit() {
        console.log('init');

    }

    ngAfterViewInit() {
        let numberVal
        if (this.value.indexOf(',') !== -1) {
            //comma found
            setTimeout(() => {
                this.commaFound = true;
            })
            
            numberVal = this.value.substring(0, 1)
        } else {
            setTimeout(() => {
                this.commaFound = false;
            })
            numberVal = this.value;
        }
        this.activeNumber = numberVal;
        const el = this.numberTexts.toArray()[+this.activeNumber];
        const elemRef = this.numberContainer.createEmbeddedView(el);
        this.activeEl = elemRef.rootNodes[0];
        this.enterAnimation(this.activeEl, slideUp.enter);
    }


    ngOnChanges(changes: SimpleChanges) {
        if (changes['value'] && changes['value'].currentValue !== undefined && !changes['value'].isFirstChange() && changes['value'].previousValue !== changes['value'].currentValue) {
            let number = changes['value'].currentValue;
            // this.activeNumber = this.numberTexts[number];
            console.log(number);

            if (number.indexOf(',') !== -1) {
                //comma found
                this.commaFound = true;
                number = this.value.substring(0, 1)
            } else {
                this.commaFound = false;
                number = this.value;
            }

            if (this.enterAnimtionPlayer) {
                this.enterAnimtionPlayer.finish()
            }
            if (this.leaveAnimtionPlayer) {
                this.leaveAnimtionPlayer.finish();
            }

            if (changes['total'].currentValue > changes['total'].previousValue) {
                // incrementing
                this.leaveAnimation(this.activeEl, slideUp.leave);
            } else {
                this.leaveAnimation(this.activeEl, slideDown.leave)
            }
            const elem = this.numberTexts.toArray()[+number];
            const eleRef = this.numberContainer.createEmbeddedView(elem);
            this.activeEl = eleRef.rootNodes[0];
            if (changes['total'].currentValue > changes['total'].previousValue) {
                // incrementing
                this.enterAnimation(this.activeEl, slideUp.enter);
            } else {
                this.enterAnimation(this.activeEl, slideDown.enter);
            }
        }
    }


    enterAnimation(el, animationMetaData) {
        if (this.enterAnimtionPlayer) { this.enterAnimtionPlayer.destroy(); }
        const builder = this.animationBuilder.build(animationMetaData);
        this.enterAnimtionPlayer = builder.create(el);

        this.enterAnimtionPlayer.onDone(() => {
            // setTimeout(() => {
            //     this.leaveAnimation(this.activeEl);
            //     this.activeNumber++;
            //     if (this.activeNumber > 9) {
            //         this.activeNumber = 0;
            //     }
            //     const elem = this.numberTexts.toArray()[this.activeNumber];
            //     // this.numberContainer.clear();
            //     const eleRef = this.numberContainer.createEmbeddedView(elem);
            //     this.activeEl = eleRef.rootNodes[0];
            //     this.enterAnimation(this.activeEl);
            // }, 1000)

        });
        this.enterAnimtionPlayer.play();
    }

    leaveAnimation(el, animationMetadata) {
        if (this.leaveAnimtionPlayer) { this.leaveAnimtionPlayer.destroy(); }
        const builder = this.animationBuilder.build(animationMetadata);
        this.leaveAnimtionPlayer = builder.create(this.activeEl);
        this.leaveAnimtionPlayer.onDone(() => {
            this.numberContainer.remove(0);
        });
        this.leaveAnimtionPlayer.play();
    }

}