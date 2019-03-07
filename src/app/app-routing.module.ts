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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/cards' },
  { path: 'virtualKeypad', component: VirtualKeypadComponent },
  { path: 'viewContainerReference', component: ViewContainerRefDemoComponent },
  { path: 'onPushStrategy', component: VirtualKeypadComponent },
  { path: 'cdkOverlay', component: CdkOverlayComponent },
  { path: 'virtualKeypad', component: VirtualKeypadComponent },
  { path: 'controlValueAccessor', component: ControlvalueaccessorComponent },
  { path: 'structuralDirective', component: StruturalDirectiveComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'inlineTable', component: InlineTableComponent },
  { path: 'inlineMatTable', component: InlineMatTableComponent },
  { path: 'dynamicForm', component: DynamicFormDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
