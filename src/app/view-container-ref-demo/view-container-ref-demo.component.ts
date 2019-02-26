import {
  Component, OnInit, ViewChild, ViewContainerRef, TemplateRef,
  ComponentFactoryResolver
} from '@angular/core';
import { DataContext } from './classes/DataContext';
import { DynamicComponent } from './dynamic/dynamic.component';
import { CdkPortalOutlet, ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-view-container-ref-demo',
  templateUrl: './view-container-ref-demo.component.html',
  styleUrls: ['./view-container-ref-demo.component.css']
})
export class ViewContainerRefDemoComponent implements OnInit {

  @ViewChild('holder', { read: ViewContainerRef }) holder: ViewContainerRef;
  @ViewChild('content', { read: TemplateRef }) content: TemplateRef<any>;
  @ViewChild('dynamicRender', { read: ViewContainerRef }) dynamicRender: ViewContainerRef;
  @ViewChild(CdkPortalOutlet) portalOutlet: CdkPortalOutlet;
  context;
  componentPortal: ComponentPortal<any>;
  constructor(
    private componentFactory: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.holder.createEmbeddedView(this.content, new DataContext('hero name', 'salmon'));
    this.context = new DataContext('using str directive', 'rosybrown');
    this.createDynamic();
    this.injectPortal();
  }

  createDynamic() {
    const injectionTokens = new WeakMap();
    const factory = this.componentFactory.resolveComponentFactory(DynamicComponent);
    const comp = this.dynamicRender.createComponent(factory);
    comp.instance.data = 'hello from component';
  }

  injectPortal() {
    this.componentPortal = new ComponentPortal(DynamicComponent);
    this.portalOutlet.attach(this.componentPortal);
  }

}
