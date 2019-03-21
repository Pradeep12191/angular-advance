import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FlipcardService } from './flipcard.service';

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
  @Input() card;

  constructor(
    private flipcardService: FlipcardService
  ) {

  }

  ngOnInit() {
    this.frontCard = this.card['front_face_card'];
    this.backCard = this.card['back_face_card'];
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
    if ((this.flipcardService.activeFlipcard !== this) && this.flipcardService.activeFlipcard ) {
      this.flipcardService.activeFlipcard.hidePopover();
    }
    this.flipcardService.activeFlipcard = this;
    this.active = !this.active;
    this.popoverDisplay = this.popoverDisplay === 'block' ? 'none' : 'block';
  }
}
