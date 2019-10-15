import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MxMaskModule } from './mx-mask-input';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgDragDropModule } from 'ng-drag-drop';
import { MatKeyboardModule } from './mat-keyboard/public_api';

import { CarouselModule } from './content-animation-demo/carousel.module';
import { DynamicFormModule } from './dynamic-form-demo/dynamic-form.module';
import { ProfileProgressModule } from './profile-progress-demo/profile-progress.module';
import { PostLoginRoutingModule } from './postlogin-routing.module';
import { VirtualKeypadComponent } from './virtual-keypad/virtual-keypad.component';
import { MenuComponent } from './menu/menu.component';
import { OvelayCComponent } from './ovelay-c/ovelay-c.component';
import { TestDirective } from './strur.directive';
import { ViewContainerRefDemoComponent } from './view-container-ref-demo/view-container-ref-demo.component';
import { RepeatDirective } from './strutural-directive/directives/repeat/repeat.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CardComponent } from './card/card.component';
import { CdkOverlayComponent } from './cdk-overlay/cdk-overlay.component';
import { ControlvalueaccessorComponent } from './controlvalueaccessor/controlvalueaccessor.component';
import { DynamicComponent } from './view-container-ref-demo/dynamic/dynamic.component';
import { CvaformComponent } from './controlvalueaccessor/cvaform/cvaform.component';
import { LoaderCDKComponent } from './cdk-overlay/loader/loader.component';
import { CdkDirective } from './cdk-overlay/cdk.directive';
import { InputEventDirective } from './mx-mask-input/input-event.directive';
import { StruturalDirectiveComponent } from './strutural-directive/strutural-directive.component';
import { FlipcardComponent } from './cards/flipcard/flipcard.component';
import { CardsComponent } from './cards/cards.component';
import { SimpleIfDirective } from './strutural-directive/simple-if.directive';
import { ImageAnimationDemoComponent } from './image-animation-demo/image-animation-demo.component';
import { BgAnimationComponent } from './image-animation-demo/bg-animation/bg-animation.component';
import { ContentAnimationDemoComponent } from './content-animation-demo/content-animation-demo.component';
import { ContentCardComponent } from './content-animation-demo/content-card/content-card.component';
import { FlipcardPopoverComponent } from './cards/flipcard/flipcard-popover/flipcard-popover.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { D3DemoComponent } from './d3-demo/d3-demo.component';
import { ProfileProgressDemoComponent } from './profile-progress-demo/profile-progress-demo.component';
import { ProfileProgressStencilComponent } from './profile-progress-stencil/profile-progress-stencil.component';
import { InlineTableComponent } from './inline-table/inline-table.component';
import { InlineMatTableComponent } from './inline-mat-table/inline-mat-table.component';
import { DynamicFormDemoComponent } from './dynamic-form-demo/dynamic-form-demo.component';
import { ButtonComponent } from './drag-drop-demo/button/button.component';
import { CdkDragDropDemoComponent } from './cdk-drag-drop-demo/cdk-drag-drop-demo.component';
import { DragDropDemoComponent } from './drag-drop-demo/drag-drop-demo.component';
import { GridComponent } from './drag-drop-demo/grid/grid.component';
import { FlipcardService } from './cards/flipcard/flipcard.service';
import { HeaderLayoutModule } from './layouts/header-layout/header-layout.module';
import { FooterLayoutModule } from './layouts/footer-layout/footer-layout.module';
import { MaterialModule } from './material.module';
import { TableRadioComponent } from './table-radio/table-radio.component';
import { RawPiechartComponent } from './raw-piechart/raw-piechart.component';
import { MatMenuTreeDemoComponent } from './mat-menu-tree-demo/mat-menu-tree-demo.component';
import { GridSpanComponent } from './grid-span/grid-span.component';

import { MomentDateAdapter, MomentDateModule } from '@angular/material-moment-adapter';
import {
    DateAdapter,
    MAT_DATE_FORMATS,
    MAT_DATE_LOCALE
} from '@angular/material';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment, Moment } from 'moment';
import { IdbDemoComponent } from './idb-demo/idb-demo.component';
import { IndexedDbService  } from './idb-demo/indexedDb.service';
import { SampleComponent } from './idb-demo/sample.component';
import { NumberAnimateDemoComponent } from './number-animate-demo/number-animate-demo.component';
import { NumberTextDirective } from './number-animate-demo/number-text.directive';
import { NumberAnimateComponent } from './number-animate-demo/number-animate/number-animate.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { VirtualScrollComponent } from './virtual-scroll-demo/vitrual-scroll-demo.component';
import { UiScrollModule } from 'ngx-ui-scroll';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategyDemoComponent } from './change-detection-strategy-demo/change-detection-strategy-demo.component';
import { ListComponent } from './change-detection-strategy-demo/list/list.component';
import { ListItemComponent } from './change-detection-strategy-demo/list/list-item/list-item.component';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'DD MMM YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

@NgModule({
    imports: [
        PostLoginRoutingModule,
        MxMaskModule.forRoot(),
        FlexLayoutModule,
        OverlayModule,
        NgDragDropModule.forRoot(),
        DynamicFormModule,
        CarouselModule,
        ImageCropperModule,
        ProfileProgressModule,
        PortalModule,
        MatKeyboardModule,
        HeaderLayoutModule,
        FooterLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ScrollingModule,
        UiScrollModule,
        HttpClientModule
    ],
    declarations: [
        VirtualKeypadComponent,
        MenuComponent,
        OvelayCComponent,
        ViewContainerRefDemoComponent,
        TestDirective,
        ParentComponent,
        ChildComponent,
        CardComponent,
        CdkOverlayComponent,
        ControlvalueaccessorComponent,
        DynamicComponent,
        CvaformComponent,
        LoaderCDKComponent,
        CdkDirective,
        InputEventDirective,
        StruturalDirectiveComponent,
        SimpleIfDirective,
        RepeatDirective,
        CardsComponent,
        FlipcardComponent,
        ImageAnimationDemoComponent,
        BgAnimationComponent,
        ContentAnimationDemoComponent,
        ContentCardComponent,
        FlipcardPopoverComponent,
        ObservableDemoComponent,
        D3DemoComponent,
        ProfileProgressDemoComponent,
        ProfileProgressStencilComponent,
        InlineTableComponent,
        InlineMatTableComponent,
        DynamicFormDemoComponent,
        DragDropDemoComponent,
        CdkDragDropDemoComponent,
        ButtonComponent,
        GridComponent,
        TableRadioComponent,
        RawPiechartComponent,
        MatMenuTreeDemoComponent,
        GridSpanComponent,
        IdbDemoComponent,
        SampleComponent,
        NumberAnimateDemoComponent,
        NumberTextDirective,
        NumberAnimateComponent,
        VirtualScrollComponent,
        ChangeDetectionStrategyDemoComponent,
        ListComponent,
        ListItemComponent
    ],
    providers: [
        FlipcardService,
        IndexedDbService,
        // { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        // { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
    ],
    entryComponents: [
        CardComponent,
        DynamicComponent,
        LoaderCDKComponent,
        GridComponent,
        FlipcardPopoverComponent,
        SampleComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PostLoginModule {

}
