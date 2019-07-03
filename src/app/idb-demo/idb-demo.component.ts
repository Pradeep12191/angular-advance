import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { IndexedDbService } from './indexedDb.service';
import { Router } from '@angular/router';
import { Overlay, ScrollStrategy, OverlayRef, ScrollStrategyOptions, CdkConnectedOverlay, ViewportRuler } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { coerceCssPixelValue } from '@angular/cdk/coercion';
import { SampleComponent } from './sample.component';

@Component({
  selector: 'app-idb-demo',
  templateUrl: './idb-demo.component.html',
  styleUrls: ['./idb-demo.component.css']
})
export class IdbDemoComponent implements OnInit {
  @ViewChildren('ip') ips: QueryList<ElementRef>;
  localReadData: any;
  rData: any;
  posts: any;
  openOverlay: boolean;
  scrollStrategy: ScrollStrategy;
  viewportHeight;
  bodyScrollHeight;
  public overlayScroll: OverlayRef;
  constructor(
    private idb: IndexedDbService,
    private router: Router,
    private overlay: Overlay,
    private readonly sc: ScrollStrategyOptions,
    private _viewPort: ViewportRuler
  ) {
    this.scrollStrategy = this.sc.block();
  }

  onBackSpace(index) {
    const root = document.querySelector('.mat-drawer-content') as HTMLElement;
    const x = root.scrollLeft, y = root.scrollTop;
        setTimeout(() => {
      this.viewportHeight = x;
      this.bodyScrollHeight = y;
    }, 1000);
    this.ips.toArray()[index - 1].nativeElement.focus();

    // root.scrollTo(x, y);

    // document.body.scrollTop = y;
    return false;
  }

  public overlayDetach(ref: CdkConnectedOverlay) {
    console.log("overlayDetach", ref.scrollStrategy);
  }

  public overlayAttach(ref: CdkConnectedOverlay) {
    console.log("overlayAttach", ref.scrollStrategy);
  }

  onFocus(e) {
    // const viewport = this._viewPort.getViewportSize()
    // setTimeout(() => {
    //   this.viewportHeight = viewport.height;
    //   this.bodyScrollHeight = document.body.scrollHeight;
    // }, 1000)

    // this.disableScroll();



    // const x = window.scrollX, y = window.scrollY;
    // const portal = new ComponentPortal(SampleComponent);
    // this.overlayScroll = this.overlay.create({
    //   scrollStrategy: this.overlay.scrollStrategies.block(),
    //   positionStrategy: this.overlay.position().global(),
    //   height: 20,
    //   width: 20
    // });
    // this.overlayScroll.attach(portal);
    // this.scroll.disable()
    // window.scrollTo(x, y);
    // document.body.scrollTop = y;
    // setTimeout(() => window.scrollTo(x, y), 100);
  }
  async ngOnInit() {
    await this.idb.openDb('posts-store', 3, 'posts', 'id');
    this.router.events.subscribe((e) => {
      console.log(e);
    });
  }
  onInput(index) {
    this.ips.toArray()[index + 1].nativeElement.focus();
  }

  disableScroll() {

    // const scrollPositon = this._viewPort.getViewportScrollPosition();
    // root.style.left = coerceCssPixelValue(-scrollPositon.left);
    // root.style.top = coerceCssPixelValue(-scrollPositon.top);
    // root.classList.add('cdk-global-scrollblock');
  }

  open() {
    window.open('http://www.google.com');
  }

  async writeData() {
    await this.idb.wtireData('posts', { name: 'pradeep', id: '1001' });
    await this.idb.wtireData('books', { name: 'book', id: '1001' });
    this.posts = {
      name: 'dhanraj',
      id: '1002'
    };
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }

  async writeMoreData() {
    await this.idb.wtireData('posts', { name: 'dhanraj', id: '1002' });
    await this.idb.wtireData('books', { name: 'book', id: '1002' });
  }
  async readAllData() {
    const data = await this.idb.readAllData('posts');
    console.log(data);
  }

  // adding another data with same 'id' wont add new data as we mentioned 'id' as keyPath,
  // instead it will update the data with same 'id'
  async changeData() {
    await this.idb.wtireData('posts', { name: 'dhanraj-changed', id: '1002' });

  }

  async readData() {
    const data = await this.idb.readData('posts', '1001');
    console.log(JSON.stringify(data));
    this.rData = JSON.stringify(data);
    const lData = localStorage.getItem('posts');
    console.log(lData);
    this.localReadData = JSON.stringify(lData);
  }

  async clearStore() {
    await this.idb.clearStore('posts');
  }

  async dropDb() {
    await this.idb.dropDb('posts-store');
  }
  async clearSingleItem() {
    this.idb.clearItemInStore('posts', '1001');
  }
}
