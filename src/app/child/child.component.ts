import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, OnDestroy, AfterViewChecked, AfterViewInit, Input } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() child;
  constructor() {
    console.log('child constructor');
  }

  ngOnInit() {
    console.log('child ngOnInit');
  }
  
  ngOnChanges() {
    console.log('child ngOnChanges');
  }
  ngDoCheck() {
    console.log('child ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('child ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('child ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('child ngAfterViewInit');
  }
  ngAfterViewChecked(){
    console.log('child ngAfterViewChecked');
  }
  ngOnDestroy(){
    console.log('child ngOnDestroy');
  }
}
