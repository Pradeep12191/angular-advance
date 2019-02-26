import { Component, OnInit, Injector, InjectionToken } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { CardComponent } from '../card/card.component';
import { CARD_DATA } from './card-data.token';

@Component({
  selector: 'app-ovelay-c',
  templateUrl: './ovelay-c.component.html',
  styleUrls: ['./ovelay-c.component.css']
})
export class OvelayCComponent implements OnInit {

  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) { }

  ngOnInit() {
    const state = new OverlayConfig();
    state.hasBackdrop = false;
    state.positionStrategy = this.overlay.position().global().centerVertically().centerHorizontally().bottom();
    const overlayRef = this.overlay.create(state);
    // passing data using portal injector
    const cardPortal = new ComponentPortal(CardComponent, null, this.createInjector());

    const ref = overlayRef.attach(cardPortal);
    // overlayRef.backdropClick().subscribe(() => {
    //   overlayRef.detach();
    // });
    // way of passing data to portal
    // ref.instance.data = 'Hello Portal';
  }

  createInjector() {
    const injectionTokens = new WeakMap();

    injectionTokens.set(CARD_DATA, 'Hello Token data');

    return new PortalInjector(this.injector, injectionTokens);
  }

}
