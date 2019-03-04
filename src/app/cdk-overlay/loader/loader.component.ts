import { Component, OnInit, AfterContentInit, ChangeDetectorRef,
  AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(private _changeRef: ChangeDetectorRef) {
   // this._changeRef.detectChanges();
  }

  ngOnInit() {

  }

}
