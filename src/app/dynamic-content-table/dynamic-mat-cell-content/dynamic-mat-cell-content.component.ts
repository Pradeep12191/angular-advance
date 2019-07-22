import {
    Component, Input, ViewChild, ViewContainerRef, OnInit,
    ComponentFactoryResolver, AfterViewInit, Output, EventEmitter
} from '@angular/core';
import {
    MatCellRadioButtonComponent, MatCellCurrencyComponent,
    MatCellLabelComponent, MatCellArrowComponent, MatCellActionComponent
} from './index';

import { ClickInfo } from '../models/ClickInfo';


const componentMap = {
    'radio': MatCellRadioButtonComponent,
    'label': MatCellLabelComponent,
    'currency': MatCellCurrencyComponent,
    'collapse': MatCellArrowComponent,
    'action': MatCellActionComponent
};


@Component({
    template: `<ng-container #inject></ng-container>`,
    selector: 'app-dynamic-mat-cell-content'
})
export class DynamicMatCellContentComponent implements OnInit {
    @Input() data;
    @Input() value;
    @Input() minHeight;
    @Input() type = 'label';
    @Output() rowSelect = new EventEmitter<any>();
    @Output() arrowClicked = new EventEmitter<any>();
    @Output() labelClicked = new EventEmitter<ClickInfo>();
    @ViewChild('inject', { read: ViewContainerRef }) inject: ViewContainerRef;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver
    ) {

    }

    public ngOnInit() {
        const comp = componentMap[this.type];
        if (!comp) {
            return;
        }
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp);
        const compRef = this.inject.createComponent(componentFactory);
        compRef.instance['value'] = this.value;
        compRef.instance['data'] = this.data;
        compRef.instance['minHeight'] = this.minHeight;
        if (compRef.instance['radioChanged']) {
            compRef.instance['radioChanged'].subscribe(() => {
                this.rowSelect.emit(this.data);
            });
        }

        if (compRef.instance['arrowClicked']) {
            compRef.instance['arrowClicked'].subscribe(() => {
                this.arrowClicked.emit(this.data);
            });
        }
        // use for any click inside the mat cell content
        if (compRef.instance['labelClicked']) {
            compRef.instance['labelClicked'].subscribe((cellInfo) => {
                // emit selected row data and cell data as ClickInfo
                this.labelClicked.emit({ rowInfo: this.data, cellInfo });
            });
        }
    }
}
