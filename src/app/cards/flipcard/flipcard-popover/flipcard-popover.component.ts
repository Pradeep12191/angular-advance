import { Component, OnInit, Input } from '@angular/core';
// import { Ham} from '@angular/platform-browser';

@Component({
  selector: 'app-flipcard-popover',
  templateUrl: './flipcard-popover.component.html',
  styleUrls: ['./flipcard-popover.component.scss']
})
export class FlipcardPopoverComponent implements OnInit {

  @Input() popoverArrowLeft;

  constructor() { }

  ngOnInit() {
  }

}
