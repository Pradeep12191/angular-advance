import { Component, Input } from '@angular/core';

import { Subject } from 'rxjs';

@Component({
    templateUrl: './mat-cell-action.component.html',
    styleUrls: ['./mat-cell-action.component.scss']
})
export class MatCellActionComponent {
    minHeight: any;
    @Input() data;
    @Input() value;
    @Input() labelClicked = new Subject<any>();

    onClick(value) {
        this.labelClicked.next(value);
    }
}
