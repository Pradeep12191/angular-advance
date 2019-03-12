import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSnackBarModule, MatCardModule, MatButtonModule } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from './view-container-ref-demo/dynamic/dynamic.component';
import { ViewContainerRefDemoComponent } from './view-container-ref-demo/view-container-ref-demo.component';
import { TestDirective } from './strur.directive';
import { RepeatDirective } from './strutural-directive/directives/repeat/repeat.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CardComponent } from './card/card.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { OvelayCComponent } from './ovelay-c/ovelay-c.component';
import { MenuComponent } from './menu/menu.component';
import { InputComponent } from './input/input.component';
import { MaterialModule } from './material.module';
import { VirtualKeypadComponent } from './virtual-keypad/virtual-keypad.component';
import { MatKeyboardModule } from './mat-keyboard/public_api';
import { AppRoutingModule } from './app-routing.module';
import { CdkOverlayComponent } from './cdk-overlay/cdk-overlay.component';
import { ControlvalueaccessorComponent } from './controlvalueaccessor/controlvalueaccessor.component';
import { CvaformComponent } from './controlvalueaccessor/cvaform/cvaform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoaderComponent } from './cdk-overlay/loader/loader.component';
import { CdkDirective } from './cdk-overlay/cdk.directive';
import { NgDragDropModule } from 'ng-drag-drop';

import { MxMaskModule } from './mx-mask-input';
import { InputEventDirective } from './mx-mask-input/input-event.directive';
import { StruturalDirectiveComponent } from './strutural-directive/strutural-directive.component';
import { SimpleIfDirective } from './strutural-directive/simple-if.directive';
import { CardsComponent } from './cards/cards.component';
import { FlipcardComponent } from './cards/flipcard/flipcard.component';
import { InlineTableComponent } from './inline-table/inline-table.component';
import { InlineMatTableComponent } from './inline-mat-table/inline-mat-table.component';
import { DynamicFormComponent } from './dynamic-form-demo/dynamic-form/dynamic-form.component';
import { DynamicInputComponent } from './dynamic-form-demo/dynamic-form/dynamic-input/dynamic-input.component';
import { DynamicFormDemoComponent } from './dynamic-form-demo/dynamic-form-demo.component';
import { AppService } from './services/app.service';
import { DragDropDemoComponent } from './drag-drop-demo/drag-drop-demo.component';
import { CdkDragDropDemoComponent } from './cdk-drag-drop-demo/cdk-drag-drop-demo.component';
import { ButtonComponent } from './drag-drop-demo/button/button.component';
import { GridComponent } from './drag-drop-demo/grid/grid.component';
import { ImageAnimationDemoComponent } from './image-animation-demo/image-animation-demo.component';
import { AddControlDialogComponent } from './dynamic-form-demo/add-control-dialog/add-control-dialog.component';
import { BgAnimationComponent } from './image-animation-demo/bg-animation/bg-animation.component';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    // DragDropModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    OverlayModule,
    PortalModule,
    MatButtonModule,
    MatKeyboardModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    OverlayModule,
    NgDragDropModule.forRoot(),
    MxMaskModule.forRoot()// MatSnackBarModule,
    // ServiceWorkerModule.register('./ngsw-worker.js',
    // enabled
  ],
  declarations: [
    AppComponent,
    DynamicComponent,
    ViewContainerRefDemoComponent,
    TestDirective,
    RepeatDirective,
    ParentComponent,
    ChildComponent,
    CardComponent,
    OvelayCComponent,
    MenuComponent,
    InputComponent,
    VirtualKeypadComponent,
    CdkOverlayComponent,
    ControlvalueaccessorComponent,
    CvaformComponent,
    LoaderComponent,
    // itisadynamiccomponentaswellasportal,
    CdkDirective,
    InputEventDirective,
    StruturalDirectiveComponent,
    SimpleIfDirective,
    RepeatDirective,
    CardsComponent,
    FlipcardComponent,
    InlineTableComponent,
    InlineMatTableComponent,
    DynamicFormComponent,
    DynamicInputComponent,
    DynamicFormDemoComponent,
    DragDropDemoComponent,
    CdkDragDropDemoComponent,
    ButtonComponent,
    GridComponent,
    ImageAnimationDemoComponent,
    AddControlDialogComponent,
    BgAnimationComponent
  ],
  providers: [AppService],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    CardComponent,
    DynamicComponent,
    LoaderComponent,
    GridComponent,
    DynamicInputComponent,
    AddControlDialogComponent
  ]
})

export class AppModule { }
