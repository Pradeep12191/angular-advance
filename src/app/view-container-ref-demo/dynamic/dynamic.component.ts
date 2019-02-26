import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-dynamic',
    template: `
    <p>This is a dynamically rendered component</p>
    <p>data: {{data}}</p>
    <p>Note: always add dynamic component to EntryComponents in Module</p>
    `
})
export class DynamicComponent {
    @Input() data;
}
