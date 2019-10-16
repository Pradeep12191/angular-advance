import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Sample } from 'test/model';
import { Detail } from 'models/ComponentDetail';
import { JSON_COMPONENT } from 'data/constant';
import { OE_Component_Details } from 'data/OE_data/components/component_details';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
    @Input() items: Sample[];
    constructor() {
        const a: Sample = { test: 'hello' };
        console.log(a);
    }
}
