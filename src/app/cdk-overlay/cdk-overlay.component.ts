import { Component, OnInit } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-cdk-overlay',
  templateUrl: './cdk-overlay.component.html',
  styleUrls: ['./cdk-overlay.component.css']
})
export class CdkOverlayComponent implements OnInit {

  constructor(
    private overlay: Overlay
  ) { }

  ngOnInit() {
    const overlay = this.overlay.create();
    // const 
    // overlay.attach()
  }

}
