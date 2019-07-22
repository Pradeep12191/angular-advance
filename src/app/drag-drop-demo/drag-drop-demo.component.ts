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

  drag(event: DragEvent) {
    event.dataTransfer.setData('text', (event.target as HTMLElement).id);
    event.dataTransfer.effectAllowed = 'copy';
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  drop(event: DragEvent) {
    event.preventDefault();
    event.dataTransfer.effectAllowed = 'copy';
    const id = event.dataTransfer.getData('text');
    (event.target as HTMLElement).appendChild(document.getElementById(id));
  }

}
