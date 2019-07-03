import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { BgContentDirective } from './bg-content.directive';
import { BgContentAnimationConfig } from './bg-content-animation/bg-content-animation.config';
import { showTrigger, slideUp, groupAnimation } from '../animation';
import { BgContentAnimationComponent } from './bg-content-animation/bg-content-animation.component';

@Component({
  selector: 'app-content-animation-demo',
  templateUrl: './content-animation-demo.component.html',
  styleUrls: ['./content-animation-demo.component.css'],
  animations: [showTrigger, slideUp, groupAnimation]
})
export class ContentAnimationDemoComponent implements OnInit, AfterViewInit {

  @ViewChild(BgContentAnimationComponent) carousel: BgContentAnimationComponent;
  public bgContentAnimationConfig: BgContentAnimationConfig;
  public card1Data;
  public card2Data;
  private _unfinishedAnimation = false;

  constructor(

  ) { }

  ngOnInit() {
    this.bgContentAnimationConfig = {
      animation: 'slideRight',
      animationDuration: '2s ease-in-out',
      // autoPlay: false,
      // manualTrigger: true,
      // pageIndicators: true,
      arrowIndicators: true,
      // playAnimationAtFirst: true,
      // playInfinite: false
    };
    this.card1Data = {
      cardContent: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`,
      cardTitle: 'Shibha Inu',
      cardSubtitle: 'Dog bread',
      cardAvatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
    };
    this.card2Data = {
      cardContent: `American Ninja Warrior (sometimes abbreviated as ANW) is an American sports entertainment competition,
      which is a spin-off of the Japanese television series Sasuke.`,
      cardTitle: 'Ninja',
      cardSubtitle: 'Warrior',
      cardAvatar: 'https://upload.wikimedia.org/wikipedia/en/d/df/American_Ninja_Warrior_Logo.jpg'
    };
  }

  onComp(e: AnimationEvent) {
    // console.log(car)
    if (e.fromState === 'void') {
      if (this._unfinishedAnimation) {
        return;
      }
      setTimeout(() => {
        this.carousel.goToNext();
      }, 2000);
      this._unfinishedAnimation = true;
    } else {
      this._unfinishedAnimation = false;
    }
    // console.log('animation done', e.fromState);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      // this.carousel.start();
    })

    // setTimeout(() => {
    //   this.carousel.goToNext();
    // }, 3000)

  }
}
