import { Component, Input } from '@angular/core';


@Component({
    templateUrl: './mat-cell-label.component.html',
    styleUrls: ['./mat-cell-label.component.scss']
})
export class MatCellLabelComponent {
    @Input() value;
    @Input() data;
    @Input() minHeight;
}
