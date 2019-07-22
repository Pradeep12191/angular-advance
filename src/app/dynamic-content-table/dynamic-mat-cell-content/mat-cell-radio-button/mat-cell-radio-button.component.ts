import { Component, Input } from '@angular/core';
import { MatRadioChange } from '@angular/material';
import { Subject } from 'rxjs';

@Component({
    templateUrl: './mat-cell-radio-button.component.html',
    styleUrls: ['./mat-cell-radio-button.component.scss']
})
export class MatCellRadioButtonComponent {
    @Input() value;
    @Input() data;
    @Input() minHeight;
    @Input() radioChanged = new Subject<any>();

    onCashbackSelect(cashback: MatRadioChange) {
        this.radioChanged.next(cashback.value);
    }
}
