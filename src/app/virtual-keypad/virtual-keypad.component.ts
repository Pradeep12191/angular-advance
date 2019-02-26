import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-virtual-keypad',
  templateUrl: './virtual-keypad.component.html',
  styleUrls: ['./virtual-keypad.component.css']
})
export class VirtualKeypadComponent implements OnInit {

  constructor() { }

  @HostListener('mousedown', ['$event'])
  onmousedown(e) {
    e.preventDefault()
  }

  ngOnInit() {
  }


}
