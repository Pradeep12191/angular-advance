import { Component, OnInit, Input } from '@angular/core';

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
