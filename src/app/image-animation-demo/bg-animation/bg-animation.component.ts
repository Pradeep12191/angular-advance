import { Component, OnInit, Input, ViewChildren, QueryList, ElementRef, OnDestroy } from '@angular/core';
import { BgAnimationConfig } from './bg-animation.config';
import { animations } from './bg-animations';
import { AnimationMetadata, AnimationBuilder, AnimationPlayer } from '@angular/animations';

const DEFAULT_BG_ANIMATION_CONFIG: BgAnimationConfig = {
  images: [],
  animation: 'fade',
  playAnimationFirst: false,
  delayBetweenAnimation: 2000,
  animationDelay: '3s'
};

@Component({
  selector: 'app-bg-animation',
  templateUrl: './bg-animation.component.html',
  styleUrls: ['./bg-animation.component.css']
})
export class BgAnimationComponent implements OnInit, OnDestroy {

  @Input() config: BgAnimationConfig;
  public displayedImages = [];
  private _config: BgAnimationConfig;
  private _allowAnimation = true;
  private _displayedImagesIndex = 0;
  private _imgEl;
  private _enterAnimationPlayer: AnimationPlayer;
  private _leaveAnimationPlayer: AnimationPlayer;
  private _hasDestroyed = false;

  get images() {
    return this._config.images;
  }

  get animationType() {
    return this._config.animation;
  }

  get delayBetweenAnimation() {
    return this._config.delayBetweenAnimation;
  }

  get animtionDelay() {
    return this._config.animationDelay;
  }

  get _playAnimationAtFirst() {
    return this.config.playAnimationFirst;
  }

  set _playAnimationAtFirst(flag) {
    this.config.playAnimationFirst = flag;
  }

  @ViewChildren('imageView') set imageViews(el: QueryList<any>) {
    if (this.images && this.images.length) {
      if (this._allowAnimation) {
        this._imgEl = (<ElementRef>el.last).nativeElement;
        if (this._playAnimationAtFirst) {
          this.enterAnimation();
        } else {
          setTimeout(() => {
            this._playAnimationAtFirst = true;
            this.leaveAnimation();
            this._allowAnimation = true;
            this.displayedImages.push(this.images[this._displayedImagesIndex]);
          }, this.delayBetweenAnimation);
        }
      }
    }
  }

  constructor(
    private animationBuilder: AnimationBuilder
  ) { }

  ngOnInit() {
    this.setConfig();
    this.displayedImages.push(this.images[this._displayedImagesIndex]);
    this._displayedImagesIndex++;
  }

  ngOnDestroy() {
    this._hasDestroyed = true;
    if (this._enterAnimationPlayer) { this._enterAnimationPlayer.destroy(); }
    if (this._leaveAnimationPlayer) { this._leaveAnimationPlayer.destroy(); }
  }

  private setConfig() {
    if (this.config) {
      this._config = { ...DEFAULT_BG_ANIMATION_CONFIG, ...this.config };
    } else {
      this._config = DEFAULT_BG_ANIMATION_CONFIG;
    }
  }

  private leaveAnimation() {
    if (this._hasDestroyed) {
      return;
    }
    // if (this._leaveAnimationPlayer) {
    //   this._leaveAnimationPlayer.destroy();
    // }
    this._leaveAnimationPlayer = this.createAnimation(this._imgEl, animations[this.animationType](this.animtionDelay).leave);

    this._leaveAnimationPlayer.onDone(() => {
      this._allowAnimation = false;
      this.displayedImages.shift();

      if (this._displayedImagesIndex === (this.images.length - 1)) {
        this._displayedImagesIndex = 0;
      } else {
        this._displayedImagesIndex++;
      }
    });

    this._leaveAnimationPlayer.play();
  }

  private enterAnimation() {
    if (this._hasDestroyed) {
      return;
    }
    if (this._enterAnimationPlayer) {
      this._enterAnimationPlayer.destroy();
    }
    this._enterAnimationPlayer = this.createAnimation(this._imgEl, animations[this.animationType](this.animtionDelay).enter);

    this._enterAnimationPlayer.onDone(() => {
      setTimeout(() => {
        this.leaveAnimation();
        this._allowAnimation = true;
        this.displayedImages.push(this.images[this._displayedImagesIndex]);
      }, this.delayBetweenAnimation);
    });

    this._enterAnimationPlayer.play();
  }


  private createAnimation(element, animationMeta: AnimationMetadata | AnimationMetadata[]) {
    const factory = this.animationBuilder.build(animationMeta);
    const player = factory.create(element);
    return player;
  }

}
