import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VirtualKeypadComponent } from './virtual-keypad/virtual-keypad.component';
import { ViewContainerRefDemoComponent } from './view-container-ref-demo/view-container-ref-demo.component';
import { CdkOverlayComponent } from './cdk-overlay/cdk-overlay.component';
import { ControlvalueaccessorComponent } from './controlvalueaccessor/controlvalueaccessor.component';
import { StruturalDirectiveComponent } from './strutural-directive/strutural-directive.component';
import { CardsComponent } from './cards/cards.component';
import { InlineTableComponent } from './inline-table/inline-table.component';
import { InlineMatTableComponent } from './inline-mat-table/inline-mat-table.component';
import { DynamicFormDemoComponent } from './dynamic-form-demo/dynamic-form-demo.component';
import { DragDropDemoComponent } from './drag-drop-demo/drag-drop-demo.component';
import { CdkDragDropDemoComponent } from './cdk-drag-drop-demo/cdk-drag-drop-demo.component';
import { ImageAnimationDemoComponent } from './image-animation-demo/image-animation-demo.component';
import { ContentAnimationDemoComponent } from './content-animation-demo/content-animation-demo.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/flipCards' },
  { path: 'virtualKeypad', component: VirtualKeypadComponent },
  { path: 'viewContainerReference', component: ViewContainerRefDemoComponent },
  { path: 'onPushStrategy', component: VirtualKeypadComponent },
  { path: 'cdkOverlay', component: CdkOverlayComponent },
  { path: 'virtualKeypad', component: VirtualKeypadComponent },
  { path: 'controlValueAccessor', component: ControlvalueaccessorComponent },
  { path: 'structuralDirective', component: StruturalDirectiveComponent },
  { path: 'inlineTable', component: InlineTableComponent },
  { path: 'inlineMatTable', component: InlineMatTableComponent },
  { path: 'dynamicForm', component: DynamicFormDemoComponent },
  { path: 'dynamicDragDrop', component: DragDropDemoComponent },
  { path: 'cdkDragDrop', component: CdkDragDropDemoComponent },
  { path: 'flipCards', component: CardsComponent },
  { path: 'imageAnimation', component: ImageAnimationDemoComponent },
  { path: 'contentAnimation', component: ContentAnimationDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
