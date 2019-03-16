import { NgModule } from '@angular/core';
import { SelectComponent } from './dynamic-form/select/select.component';
import { DynamicFieldDirective } from './dynamic-form/dynamic-field.directive';
import { AddControlDialogComponent } from './add-control-dialog/add-control-dialog.component';
import { InputComponent } from './dynamic-form/input/input.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        ReactiveFormsModule,
        MaterialModule,
        CommonModule,
        FlexLayoutModule
    ],
    declarations: [
        DynamicFieldDirective,
        SelectComponent,
        InputComponent,
        DynamicFormComponent,
        AddControlDialogComponent
    ],
    entryComponents: [
        AddControlDialogComponent,
        SelectComponent,
        InputComponent,
    ],
    exports: [DynamicFormComponent]
})
export class DynamicFormModule {

}
