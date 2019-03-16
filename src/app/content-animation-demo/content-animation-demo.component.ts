import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, ElementRef } from '@angular/core';
import { BgContentDirective } from './bg-content.directive';

@Component({
  selector: 'app-content-animation-demo',
  templateUrl: './content-animation-demo.component.html',
  styleUrls: ['./content-animation-demo.component.css']
})
export class ContentAnimationDemoComponent implements OnInit {

  constructor(
    
  ) { }

  ngOnInit() {
  }
}
