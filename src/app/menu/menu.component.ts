import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, ElementRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { showTrigger } from '../animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [showTrigger]
})
export class MenuComponent implements OnInit {

  @ViewChild('menuButton', { read: ElementRef }) menuButton;
  @ViewChild('menu', { read: TemplateRef }) menu;
  constructor(
    private overlay: Overlay,
    private vc: ViewContainerRef,
  ) { }

  ngOnInit() {

    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('3 sec');
      }, 3000);
    });

    p.then(function(data) {

      // return set
      // return Promise.resolve();
      // return data;
    }).then(function(data) {

    });

  }

  openMenu() {
    const menuPortal = new TemplatePortal(this.menu, this.vc);
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position()
        // .flexibleConnectedTo(this.menuButton).withLockedPosition().withTransformOriginOn('.menu'),
        .connectedTo(this.menuButton, { originX: 'end', originY: 'top' },
          { overlayX: 'start', overlayY: 'top' }),
      scrollStrategy: this.overlay.scrollStrategies.block(),
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop'
    });
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });
    overlayRef.attach(menuPortal);
  }

}
