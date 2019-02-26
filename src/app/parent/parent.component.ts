import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, OnDestroy, AfterViewChecked, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
@Input() parent;
  constructor() {
    console.log('parent constructor');
  }

  ngOnInit() {
    console.log('parent ngOnInit');
  }
  ngOnChanges() {
    console.log('parent ngOnChanges');
  }
  ngDoCheck() {
    console.log('parent ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('parent ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('parent ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('parent ngAfterViewInit');
  }
  ngAfterViewChecked(){
    console.log('parent ngAfterViewChecked');
  }
  ngOnDestroy(){
    console.log('parent ngOnDestroy');
  }
}
