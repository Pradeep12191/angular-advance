import {
  Component, OnInit, AfterContentInit, ContentChildren,
  QueryList, ViewContainerRef, TemplateRef, Renderer2, ViewChild, Input, OnDestroy, Inject, forwardRef
} from '@angular/core';
import { BgContentDirective } from '../bg-content.directive';
import { AnimationBuilder, AnimationMetadata, style, animate, AnimationPlayer } from '@angular/animations';
import { animations } from '../../animations/bg-animations';
import { BgContentAnimationConfig } from './bg-content-animation.config';
import { timer, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const DEFAULT_CONTENT_ANIMATION_CONFIG: BgContentAnimationConfig = {
  animation: 'fade',
  animationDuration: '0.5s',
  autoPlay: true,
  arrowIndicators: false,
  pageIndicators: false,
  playInfinite: true,
  playAnimationAtFirst: true,
  interval: 5000,
  manualTrigger: false
};

@Component({
  exportAs: 'car',
  // tslint:disable-next-line:component-selector
  selector: 'bg-content-animation',
  templateUrl: './bg-content-animation.component.html',
  styleUrls: ['./bg-content-animation.component.scss']
})
export class BgContentAnimationComponent implements OnInit, AfterContentInit, OnDestroy {

  @Input() config: BgContentAnimationConfig;

  @ContentChildren(BgContentDirective, { read: TemplateRef }) slides: QueryList<TemplateRef<BgContentDirective>>;
  @ViewChild('slider', { read: ViewContainerRef }) sliderContainer: ViewContainerRef;
  public activeSlideIndex = 0;
  public slidesArray = [];
  private _enterAnimationPlayer: AnimationPlayer;
  private _leaveAnimationPlayer: AnimationPlayer;
  private _activeSlideEl;
  private _hasDestoryed;
  private _hasAnimationFinished = false;
  private _finish$ = new Subject<void>();
  private _playBackwards = false;
  constructor(
    private vc: ViewContainerRef,
    private animationBuilder: AnimationBuilder,
    private render: Renderer2,
  ) { }

  ngOnInit() {
    this._setConfig();
  }

  get animationType() {
    return this.config.animation;
  }

  set animationType(animation) {
    this.config.animation = animation;
  }

  get animationDuration() {
    return this.config.animationDuration;
  }

  get autoPlay() {
    return this.config.autoPlay;
  }

  get arrowIndicators() {
    return this.config.arrowIndicators;
  }

  get pageIndicators() {
    return this.config.pageIndicators;
  }

  get playInfinite() {
    return this.config.playInfinite;
  }

  get playAnimationAtFirst() {
    return this.config.playAnimationAtFirst;
  }

  get delayBetweenSlide() {
    return this.config.interval;
  }

  get manualTrigger() {
    return this.config.manualTrigger;
  }

  ngAfterContentInit() {
    this.slidesArray = this.slides.toArray();
    if (this.manualTrigger) {
      return;
    }

    if (!this.playAnimationAtFirst || !this.autoPlay) {
      // dont play animation for first slide.
      // - inject first slide with no animation.
      const slideRef = this.sliderContainer.createEmbeddedView(this.slidesArray[0]);
      this._activeSlideEl = slideRef.rootNodes[0];
      // do not play automatically.
      // - inject first slide.
      if (!this.autoPlay) {
        return;
      }

      return timer(this.delayBetweenSlide).pipe(takeUntil(this._finish$)).subscribe(() => {
        this._next();
      });
    }
    this.start();
    // this.sliderContainer.createEmbeddedView(this._slidesArray[0]);
    // this.sliderContainer.createEmbeddedView(this._slidesArray[1]);
  }

  ngOnDestroy() {
    this._hasDestoryed = true;
    if (this._enterAnimationPlayer) { this._enterAnimationPlayer.destroy(); }
    if (this._leaveAnimationPlayer) { this._leaveAnimationPlayer.destroy(); }
    if (this.sliderContainer) { this.sliderContainer.clear(); }
  }

  public gotToPrevious() {
    this._playBackwards = true;
    this._finish$.next();
    if (!this._hasAnimationFinished) {
      this._hasAnimationFinished = true;
      return this._finishAnimation();
    }
    if (this.animationType.startsWith('slide')) {
      this.animationType = 'slideLeft';
    }
    this._previous();

  }

  public goToNext() {
    this._playBackwards = false;
    this._finish$.next();
    if (!this._hasAnimationFinished) {
      this._hasAnimationFinished = true;
      return this._finishAnimation();
    }
    if (this.animationType.startsWith('slide')) {
      this.animationType = 'slideRight';
    }
    this._next();
  }

  public goTo(slideIndex) {
    this._finish$.next();
    if (!this._hasAnimationFinished) {
      this._hasAnimationFinished = true;
      return this._finishAnimation();
    }
    if (this.animationType.startsWith('slide')) {
      this.animationType = (slideIndex > this.activeSlideIndex) ? 'slideRight' : 'slideLeft';
      this._playBackwards = (slideIndex > this.activeSlideIndex) ? false : true;
    }
    this._goTo(slideIndex);
  }

  public disableArrow(arrow: 'right' | 'left') {
    if (this.playInfinite) {
      return false;
    }
    if (arrow === 'right') {
      return this.activeSlideIndex === this.slides.length - 1;
    }
    return this.activeSlideIndex === 0;
  }

  public start() {
    this._start();
    this._enterAnimation();
  }

  private _createAnimation(element, animationMeta: AnimationMetadata | AnimationMetadata[]) {
    const factory = this.animationBuilder.build(animationMeta);
    const player = factory.create(element);
    return player;
  }

  private _enterAnimation() {
    if (this._hasDestoryed) {
      return;
    }
    if (this._enterAnimationPlayer) {
      this._enterAnimationPlayer.destroy();
    }
    this._enterAnimationPlayer = this._createAnimation(this._activeSlideEl,
      animations[this.animationType](this.animationDuration).enter
    );

    this._enterAnimationPlayer.onDone(() => {
      // on completion on every animation start next animation
      this._hasAnimationFinished = true;
      if (!this.manualTrigger && this.autoPlay) {
        timer(this.delayBetweenSlide).pipe(takeUntil(this._finish$)).subscribe(() => {
          if (this._playBackwards) {
            this._previous();
          } else {
            this._next();
          }
        });
      }

    });
    this._enterAnimationPlayer.play();
  }

  private _leaveAnimation() {
    if (this._hasDestoryed) {
      return;
    }
    if (this._leaveAnimationPlayer) {
      this._leaveAnimationPlayer.destroy();
    }
    if (this._activeSlideEl) {
      this._leaveAnimationPlayer = this._createAnimation(this._activeSlideEl,
        animations[this.animationType](this.animationDuration).leave
      );
      this._leaveAnimationPlayer.onDone(() => {
        // once animation is completed remove from DOM
        this.sliderContainer.remove(0);
      });
      this._leaveAnimationPlayer.play();
    }

  }

  private _next() {
    // reached last slide and playInfinite property is false - do nothing.
    if ((this.activeSlideIndex === (this.slides.length - 1)) && !this.playInfinite) {
      return;
    }
    this._playAnimation((slidesLength) => {
      if (this.activeSlideIndex === (slidesLength - 1)) {
        this.activeSlideIndex = 0;
      } else {
        this.activeSlideIndex++;
      }
    });
  }

  private _previous() {
    this._playAnimation((slidesLength) => {
      if (this.activeSlideIndex === 0) {
        this.activeSlideIndex = slidesLength - 1;
      } else {
        this.activeSlideIndex--;
      }
    });
  }

  private _goTo(slideIndex) {
    this._playAnimation(() => {
      this.activeSlideIndex = slideIndex;
    });
  }

  private _start() {
    this.activeSlideIndex = 0;
    this._createSlide();
  }

  private _playAnimation(changeIndexFn: (slidesLength?: number) => void) {
    this._leaveAnimation();
    changeIndexFn(this.slides.length);
    this._createSlide();
    this._enterAnimation();
    this._hasAnimationFinished = false;
  }


  private _createSlide() {
    const activeSlide = this.slidesArray[this.activeSlideIndex];
    const slideRef = this.sliderContainer.createEmbeddedView(activeSlide);
    this._activeSlideEl = slideRef.rootNodes[0];
  }

  private _setConfig() {
    if (this.config) {
      if (this.config.arrowIndicators || this.config.pageIndicators) {
        // this.config.autoPlay = false;
      }
      this.config = { ...DEFAULT_CONTENT_ANIMATION_CONFIG, ...this.config };
    } else {
      this.config = { ...DEFAULT_CONTENT_ANIMATION_CONFIG };
    }
    if (this.config.manualTrigger) {
      this._hasAnimationFinished = true;
    }
  }

  private _finishAnimation() {
    // forcefully finish animation - if next button is clicked before animation finishes.
    if (this._leaveAnimationPlayer) { this._leaveAnimationPlayer.finish(); }
    if (this._enterAnimationPlayer) { this._enterAnimationPlayer.finish(); }
  }

}
