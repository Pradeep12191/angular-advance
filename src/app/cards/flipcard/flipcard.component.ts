import { Component, OnInit, Input, Injector, ElementRef, ContentChild, AfterContentInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FlipcardService } from './flipcard.service';
import { OverlayConfig, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { FlipcardPopoverComponent } from './flipcard-popover/flipcard-popover.component';
import { MediaObserver } from '@angular/flex-layout';

const rotate = trigger('rotateState', [
  state('front', style({
    transform: 'rotateY(0deg)'
  })),
  state('back', style({
    transform: 'rotateY(180deg)'
  })),
  transition('front => back', animate('500ms linear')),
  transition('back => front', animate(500))
]);

@Component({
  selector: 'app-flipcard',
  templateUrl: './flipcard.component.html',
  styleUrls: ['./flipcard.component.scss'],
  animations: [rotate]
})
export class FlipcardComponent implements OnInit {
  public frontCard;
  public backCard;
  public direction: 'front' | 'back' = 'front';
  public popoverDisplay: 'block' | 'none';
  public active;
  public popoverWidth = 100;
  public popoverLeft = 0;
  public popoverArrowLeft = 46;
  private _cards = 2;
  @Input() card;
  @Input() cardNo;
  @Input() cardLength;
  @ContentChild(FlipcardPopoverComponent) popover: FlipcardPopoverComponent;

  constructor(
    private flipcardService: FlipcardService,
    private overlay: Overlay,
    private injector: Injector,
    private el: ElementRef,
    private md: MediaObserver
  ) {

  }

  ngOnInit() {
    this.frontCard = this.card['front_face_card'];
    this.backCard = this.card['back_face_card'];
    const cards = 2;
  }

  rotate(direction) {
    this.direction = direction;
  }

  showPopover() {
    this.active = true;
    this.popoverDisplay = 'block';
  }

  hidePopover() {
    this.active = false;
    this.popoverDisplay = 'none';
  }
  togglePopover() {
    if ((this.flipcardService.activeFlipcard !== this) && this.flipcardService.activeFlipcard) {
      this.flipcardService.activeFlipcard.hidePopover();
    }
    console.log(this.md.isActive('gt-sm'));
    if (this.md.isActive('gt-sm')) {
      this.popoverWidth = this.cardLength * 100;
      this.popoverLeft = -(this.cardNo * 100);
      const a = Math.ceil(100 / this.cardLength);
      const b = Math.ceil(a / 2);
      const res = b + (a * this.cardNo);
      // this.popoverArrowLeft = (25 + (50 * this.cardNo) - 4);
      this.popoverArrowLeft = res;
    } else {
      this.popoverWidth = 100;
      this.popoverLeft = 0;
      this.popoverArrowLeft = 46;
    }
    this.flipcardService.activeFlipcard = this;
    this.active = !this.active;
    this.popoverDisplay = this.popoverDisplay === 'block' ? 'none' : 'block';
  }

}
