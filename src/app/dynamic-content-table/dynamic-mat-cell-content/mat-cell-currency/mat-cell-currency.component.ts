import { Component, Input } from '@angular/core';

@Component({
    templateUrl: './mat-cell-currency.component.html',
    styleUrls: ['./mat-cell-currency.component.scss']
})
export class MatCellCurrencyComponent {
    @Input() value;
    @Input() data;
    @Input() minHeight;
}
