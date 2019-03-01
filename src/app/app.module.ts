import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSnackBarModule, MatCardModule, MatButtonModule } from '@angular/material';
import { DemoComponent } from './demo/demo.component';
import { BlurDirective } from './directive/blur.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from './view-container-ref-demo/dynamic/dynamic.component';
import { ViewContainerRefDemoComponent } from './view-container-ref-demo/view-container-ref-demo.component';
import { TestDirective } from './strur.directive';
import { RepeatDirective } from './repeat.directive';
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
import { MxMaskModule } from './mx-mask-input';
import { InputEventDirective } from './mx-mask-input/input-event.directive';
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
    MxMaskModule.forRoot()
    // MatSnackBarModule,
    // ServiceWorkerModule.register('./ngsw-worker.js',
    // enabled
  ],
  declarations: [AppComponent,
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
    InputEventDirective
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CardComponent, DynamicComponent]
})

export class AppModule { }
