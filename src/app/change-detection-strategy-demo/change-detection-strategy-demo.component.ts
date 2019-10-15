import { Component } from '@angular/core';

@Component({
    templateUrl: 'change-detection-strategy-demo.component.html',
    styleUrls: ['./change-detection-strategy-demo.component.scss'],
})
export class ChangeDetectionStrategyDemoComponent {
    items = [
        { name: 'Name', value: 'value' },
        { name: 'Name', value: 'value' }
    ];

    addItem() {
        this.items = [...this.items, {name: 'Name', value: 'Value'}];
    }
}
