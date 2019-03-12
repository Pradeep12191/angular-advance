import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import { GridComponent } from './grid/grid.component';

@Component({
  selector: 'app-drag-drop-demo',
  templateUrl: './drag-drop-demo.component.html',
  styleUrls: ['./drag-drop-demo.component.scss']
})
export class DragDropDemoComponent implements OnInit {

  @ViewChild('anchor', { read: ViewContainerRef }) screenAnchor: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }

  onItemDrop(e) {
    const factoryResolver = this.componentFactoryResolver.resolveComponentFactory(GridComponent);
    const comp = this.screenAnchor.createComponent(factoryResolver);
    comp.changeDetectorRef.detectChanges();

  }

}
