import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VirtualKeypadComponent } from './virtual-keypad/virtual-keypad.component';
import { ViewContainerRefDemoComponent } from './view-container-ref-demo/view-container-ref-demo.component';
import { CdkOverlayComponent } from './cdk-overlay/cdk-overlay.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/virtualKeypad' },
    { path: 'virtualKeypad', component: VirtualKeypadComponent },
    { path: 'viewContainerReference', component: ViewContainerRefDemoComponent },
    { path: 'onPushStrategy', component: VirtualKeypadComponent },
    { path: 'cdkOverlay', component: CdkOverlayComponent },
    { path: 'virtualKeypad', component: VirtualKeypadComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}