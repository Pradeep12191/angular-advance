import { Component, OnInit, AfterContentInit, ContentChildren, QueryList, ViewContainerRef, TemplateRef, Renderer2 } from '@angular/core';
import { BgContentDirective } from '../bg-content.directive';
import { AnimationBuilder, AnimationMetadata, style, animate, AnimationPlayer } from '@angular/animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bg-content-animation',
  templateUrl: './bg-content-animation.component.html',
  styleUrls: ['./bg-content-animation.component.css']
})
export class BgContentAnimationComponent implements OnInit, AfterContentInit {

  @ContentChildren(BgContentDirective, { read: TemplateRef }) slides: QueryList<TemplateRef<BgContentDirective>>;
  private _enterAnimationPlayer: AnimationPlayer;
  private _leaveAnimationPlayer: AnimationPlayer;
  private _slideIndex = 0;
  private _slidesArray = [];
  private _activeSlideEl;
  constructor(
    private vc: ViewContainerRef,
    private animationBuilder: AnimationBuilder,
    private render: Renderer2
  ) { }

  ngOnInit() {
    console.log(this.slides);
  }

  ngAfterContentInit() {

    this._slidesArray = this.slides.toArray();
    this.next();
    this._enterAnimation();
  }

  private _createAnimation(element, animationMeta: AnimationMetadata | AnimationMetadata[]) {
    const factory = this.animationBuilder.build(animationMeta);
    const player = factory.create(element);
    return player;
  }

  private _enterAnimation() {
    this._enterAnimationPlayer = this._createAnimation(this._activeSlideEl,
      [style({ opacity: 0 }), animate('2s')]
    );
    this._enterAnimationPlayer.onDone(() => {
      this._leaveAnimation();
      this.next();
      this._enterAnimation();
    });
    this._enterAnimationPlayer.play();
  }

  private _leaveAnimation() {
    this._leaveAnimationPlayer = this._createAnimation(this._activeSlideEl,
      [animate('2s', style({ opacity: 0 }))]
    );
    this._leaveAnimationPlayer.onDone(() => {
      this.vc.remove(0);
    });
    this._leaveAnimationPlayer.play();
  }

  private next() {
    const activeSlide = this._slidesArray[this._slideIndex];
    const slideRef = this.vc.createEmbeddedView(activeSlide);
    this._activeSlideEl = slideRef.rootNodes[0];
    if (this._slideIndex === (this._slidesArray.length - 1)) {
      this._slideIndex = 0;
    } else {
      this._slideIndex++;
    }
  }

}
