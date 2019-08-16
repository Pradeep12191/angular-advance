import { Component, ViewChild, ViewContainerRef, OnInit, TemplateRef, ViewChildren, QueryList, AfterViewInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NumberTextDirective } from './number-text.directive';
import { AnimationBuilder, style, animate, AnimationPlayer } from '@angular/animations';
import { MatSliderChange } from '@angular/material';

@Component({
    templateUrl: './number-animate-demo.component.html',
    styleUrls: ['./number-animate-demo.component.scss']
})
export class NumberAnimateDemoComponent implements OnInit, AfterViewInit {

    slides = [1, 2];

    activeEl;
    value = 0;
    activeNumber;
    enterAnimtionPlayer: AnimationPlayer;
    leaveAnimtionPlayer: AnimationPlayer;
    numbers = [{ value: '1' }, { value: '0' }, { value: '0' }, { value: '0' }]
    totalValue;
    previousTotalValue;

    constructor(
        private animationBuilder: AnimationBuilder,
    ) { }

    onSliderChange($event: MatSliderChange) {
        this.totalValue = $event.value;
        const numberArray = this.totalValue.toString().split('').reverse()
        this.numbers = this.numbers.reverse();

        const numberLen = numberArray.length;
        let numbersLen = this.numbers.length - 1;
        let numCount = 0;
        if (this.totalValue > this.previousTotalValue) {
            for (let i = 0; i < numberLen; i++) {
                if (this.numbers[i]) {
                    this.numbers[i].value = numberArray[i];
                } else {
                    this.numbers.push({ value: numberArray[i] })
                }
            }
        } else { 
            for (let i = 0; i < this.numbers.length; i++) {
                if (numberArray[i]) {
                    this.numbers[i].value = numberArray[i];
                } else {
                    this.numbers.pop()
                }
            }
        }


        this.numbers = this.numbers.reverse();

        const numberVal = +this.numbers.map(number => number.value).join('');
        const numberStrArr = numberVal.toLocaleString('en-IN').split('');
        const finalArr = [];

        for (let i = 0; i < numberStrArr.length; i++) {
            if (numberStrArr[i + 1] && numberStrArr[i + 1] === ',') {
                finalArr.push(numberStrArr[i] + numberStrArr[i + 1])
            } else if (numberStrArr[i] !== ',') {
                finalArr.push(numberStrArr[i])
            }
        }

        for (let i = 0; i < this.numbers.length; i++) {
            this.numbers[i].value = finalArr[i];
        }

        this.previousTotalValue = this.totalValue;
    }

    ngOnInit() {
        // setInterval(() => {
        //     if (this.value === 9) {
        //         return this.value = 0;
        //     }
        //     this.value++
        // }, 1000)
        // let x = 1
        // while(x <= 100000){

        //     x = x + 1;
        // }

    }

    ngAfterViewInit() {

    }

    createNumber() {

    }


}
