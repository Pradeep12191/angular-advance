import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Subject } from 'rxjs';

const rotateTrigger = trigger('rotateState', [
    state('up', style({ transform: 'rotate(0deg)' })),
    state('down', style({ transform: 'rotate(180deg)' })),
    transition('up => down', [style({ 'margin-top': '6px' }), animate(300)]),
    transition('down => up', [style({ 'margin-top': '-6px' }), animate(300)])
]);


@Component({
    templateUrl: './mat-cell-arrow.component.html',
    styleUrls: ['./mat-cell-arrow.component.scss'],
    animations: [rotateTrigger]
})
export class MatCellArrowComponent {
    @Input() value;
    @Input() data;
    @Input() minHeight;
    @Input() arrowClicked = new Subject();

    // rotate = 'up';

    rotateArrow() {
        // this.rotate = this.rotate === 'up' ? 'down' : 'up';
        this.arrowClicked.next(this.data);
    }
}
