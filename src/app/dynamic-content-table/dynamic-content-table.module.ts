import { NgModule } from '@angular/core';
import { MatRadioModule, MatTableModule, MatSortModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

import { DynamicContentTableComponent } from './dynamic-content-table.component';
import {
    MatCellArrowComponent,
    MatCellCurrencyComponent,
    MatCellLabelComponent,
    MatCellRadioButtonComponent,
    MatCellActionComponent
} from './dynamic-mat-cell-content';
import { DynamicMatCellContentComponent } from './dynamic-mat-cell-content/dynamic-mat-cell-content.component';
import { SpaceBetweenCurrencyPipe } from './space-between-currency.pipe';


@NgModule({
    imports: [
        MatRadioModule,
        FlexLayoutModule,
        MatTableModule,
        MatSortModule,
        CommonModule
    ],
    declarations: [
        DynamicContentTableComponent,
        DynamicMatCellContentComponent,
        MatCellArrowComponent,
        MatCellCurrencyComponent,
        MatCellLabelComponent,
        MatCellRadioButtonComponent,
        MatCellActionComponent,
        SpaceBetweenCurrencyPipe
    ],
    entryComponents: [
        MatCellArrowComponent,
        MatCellCurrencyComponent,
        MatCellLabelComponent,
        MatCellRadioButtonComponent,
        MatCellActionComponent
    ],
    exports: [DynamicContentTableComponent]
})
export class DynamicContentTableModule {

}
