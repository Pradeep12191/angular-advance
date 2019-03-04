import { Directive, ElementRef, OnInit } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoaderComponent } from './loader/loader.component';
import { MatSidenav } from '@angular/material';

@Directive({
  selector: '[appCdk]'
})
export class CdkDirective implements OnInit {
  constructor(private overlay: Overlay, private el: ElementRef) {
  }
  ngOnInit() {
    console.log(CdkDirective);
    // const position = this.overlay.position().global().centerVertically().centerHorizontally();
    // const position = this.overlay.position().connectedTo(this.el, { originX: 'center', originY: 'center' },
    //   { overlayX: 'start', overlayY: 'top' });
    const position = this.overlay.position().flexibleConnectedTo(this.el).withPositions(
      [{ originX: 'center', originY: 'center', overlayX: 'center', overlayY: 'center', panelClass: 'dummy' }]
      );
    const scroll = this.overlay.scrollStrategies.block();
    const overlayRef = this.overlay.create({
      // width: '100%', height: '100%',
      hasBackdrop: false, // default backdrop if this need dont use backdropClass
      backdropClass: 'dark-backdrop', //  use backdropClass to show different color in backdrop
      panelClass: 'tm-file-preview-dialog-panel',
      positionStrategy: position,
      scrollStrategy: scroll
    });
    const userProfilePortal = new ComponentPortal(LoaderComponent);
    setTimeout(() => {
      overlayRef.attach(userProfilePortal);
    })
  }

}
