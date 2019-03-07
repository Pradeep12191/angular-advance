import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

const rotate = trigger('rotateState', [
  state('front', style({
    transform: 'rotateY(0deg)'
  })),
  state('back', style({
    transform: 'rotateY(180deg)'
  })),
  transition('front => back', animate(500)),
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
  public direction: 'front' | 'back';
  @Input() card;

  ngOnInit() {
    this.frontCard = this.card['front_face_card'];
    this.backCard = this.card['back_face_card'];
  }

  rotate(direction) {
    this.direction = direction;
  }
}
