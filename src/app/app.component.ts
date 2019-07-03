import {
  Component, AfterViewInit, ViewChild, ElementRef, OnInit, TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

import { animation, showTrigger } from './animation';
import Inputmask from 'inputmask';
import { NgModel } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import * as moment from 'moment';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { CardComponent } from './card/card.component';
import { AnimationBuilder, style, animate, AnimationPlayer, AnimationMetadata } from '@angular/animations';
import { AppService } from './services/app.service';
import { Router } from '@angular/router';

const anim = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [animation, showTrigger],
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'app';
  clickInfo = 'default';
  show = true;
  toggleAnimate = true;
  // show = false;
  value = 100;
  model;
  second = [];
  first = [1];
  @ViewChild('ip') ip: NgModel;
  e: any = 's';
  player: AnimationPlayer;
  private _quoteEl;
  public isSmallDevice = false;
  public openSideNav = true;
  public stickyClass$;
  constructor(
    // private snack: MatSnackBar
    private overlay: Overlay,
    private builder: AnimationBuilder,
    public mediaObserver: MediaObserver,
    private appService: AppService,
    private router: Router
  ) {
    this.mediaObserver.media$.subscribe((media) => {
      console.log('media alias', media);
      if (media.mqAlias === 'xs') {
        this.isSmallDevice = true;
        this.openSideNav = false;
      } else {
        this.isSmallDevice = false;
        this.openSideNav = true;
      }
    });
  }


  @ViewChild('quote') set quote(el: ElementRef) {
    if (el) {
      this._quoteEl = el.nativeElement;
      this.showAnimation();
    }
  }


  // @ViewChild('im') im: ElementRef;
  // changeState() {
  //   this.clickInfo = 'clicked';
  //   // setTimeout(() => {
  //   //   this.clickInfo = 'default'
  //   // }, 1000)
  // }

  ngOnInit() {
   this.stickyClass$ = this.appService.stickyClassObs();
  }

  public ngAfterViewInit() {
    // let im = Inputmask("99-9999999");
    // im.mask(this.im.nativeElement)

  }

  drop(e: CdkDragDrop<string[]>) {
    this.second.push(1);
    // this.first.pop();s
  }

  buildAnimation(state) {
    this.toggleAnimate = !this.toggleAnimate;
    if (!this.toggleAnimate) {
      this.hideAnimation(() => {
        this.show = false;
      });
    } else {
      this.show = true;
    }
  }

  createAnimation(element, animationMeta: AnimationMetadata | AnimationMetadata[]) {
    const factory = this.builder.build(animationMeta);
    const player = factory.create(element);
    return player;
  }

  hideAnimation(afterAnimation) {
    const player = this.createAnimation(this._quoteEl, [
      animate(300),
      style({ transform: 'translateY(-10px)', opacity: 0 })
    ]);
    player.onDone(afterAnimation);
    player.play();

  }

  showAnimation() {
    const player = this.createAnimation(this._quoteEl, [
      style({ transform: 'translateY(-10px)', opacity: 0 }),
      animate(300, style({ transform: 'translateY(0)', opacity: 1 }))
    ]);

    player.play();
  }
}
