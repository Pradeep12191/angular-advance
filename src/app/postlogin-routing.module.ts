import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderLayoutComponent } from './layouts/header-layout/header-layout.component';
import { FooterLayoutComponent } from './layouts/footer-layout/footer-layout.component';
import { VirtualKeypadComponent } from './virtual-keypad/virtual-keypad.component';
import { ViewContainerRefDemoComponent } from './view-container-ref-demo/view-container-ref-demo.component';
import { CdkOverlayComponent } from './cdk-overlay/cdk-overlay.component';
import { ControlvalueaccessorComponent } from 'src/app/controlvalueaccessor/controlvalueaccessor.component';
import { StruturalDirectiveComponent } from './strutural-directive/strutural-directive.component';
import { InlineTableComponent } from './inline-table/inline-table.component';
import { InlineMatTableComponent } from './inline-mat-table/inline-mat-table.component';
import { DynamicFormDemoComponent } from './dynamic-form-demo/dynamic-form-demo.component';
import { ImageAnimationDemoComponent } from './image-animation-demo/image-animation-demo.component';
import { CardsComponent } from './cards/cards.component';
import { CdkDragDropDemoComponent } from './cdk-drag-drop-demo/cdk-drag-drop-demo.component';
import { DragDropDemoComponent } from './drag-drop-demo/drag-drop-demo.component';
import { ContentAnimationDemoComponent } from './content-animation-demo/content-animation-demo.component';
import { ObservableDemoComponent } from 'src/app/observable-demo/observable-demo.component';
import { D3DemoComponent } from './d3-demo/d3-demo.component';
import { ProfileProgressDemoComponent } from './profile-progress-demo/profile-progress-demo.component';
import { ProfileProgressStencilComponent } from './profile-progress-stencil/profile-progress-stencil.component';
import { TableRadioComponent } from './table-radio/table-radio.component';
import { RawPiechartComponent } from './raw-piechart/raw-piechart.component';
import { MatMenuTreeDemoComponent } from './mat-menu-tree-demo/mat-menu-tree-demo.component';
import { GridSpanComponent } from './grid-span/grid-span.component';
import { IdbDemoComponent } from './idb-demo/idb-demo.component';
import { NumberAnimateDemoComponent } from './number-animate-demo/number-animate-demo.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '', component: HeaderLayoutComponent, outlet: 'header',
            data: { menuToggle: true }
        },
        { path: '', component: FooterLayoutComponent, outlet: 'footer' },
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
        { path: 'observable', component: ObservableDemoComponent },
        { path: 'd3', component: D3DemoComponent },
        { path: 'profileProgress', component: ProfileProgressDemoComponent },
        { path: 'profileProgressStencil', component: ProfileProgressStencilComponent },
        { path: 'tableRadio', component: TableRadioComponent },
        { path: 'rawPieChart', component: RawPiechartComponent },
        { path: 'matMenuTree', component: MatMenuTreeDemoComponent },
        { path: 'gridSpan', component: GridSpanComponent },
        { path: 'idbDemo', component: IdbDemoComponent },
        { path: 'numberAnimateDemo', component: NumberAnimateDemoComponent },
    ])],
    exports: [RouterModule]
})
export class PostLoginRoutingModule {

}
