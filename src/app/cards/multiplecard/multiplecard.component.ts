import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multiplecard',
  templateUrl: './multiplecard.component.html',
  styleUrls: ['./multiplecard.component.scss']
})
export class MultiplecardComponent implements OnInit {
  public visibleCard;
  @Input() card;

  ngOnInit() {
    this.visibleCard = this.card['front_face_card'];
  }

  toggleCard() {
    
  }
}
