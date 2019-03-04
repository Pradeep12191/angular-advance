import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoaderComponent } from './loader/loader.component';
import { MatSidenav } from '@angular/material';
import { CdkDirective } from './cdk.directive';

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
    // console.log(CdkDirective);
    // const position = this.overlay.position().connectedTo(this.cdkDirective, { originX: 'center', originY: 'center' },
    //   { overlayX: 'start', overlayY: 'top' });
    // const scroll = this.overlay.scrollStrategies.block();
    // const overlayRef = this.overlay.create({
    //   width: 100, height: 100,
    //   hasBackdrop: true, // default backdrop if this need dont use backdropClass
    //   // backdropClass: 'dark-backdrop', //  use backdropClass to show different color in backdrop
    //   panelClass: 'tm-file-preview-dialog-panel',
    //   positionStrategy: position,
    //   scrollStrategy: scroll
    // });
    // const userProfilePortal = new ComponentPortal(LoaderComponent);
    // setTimeout(() => {
    //   overlayRef.attach(userProfilePortal);
    // })
  }

}
