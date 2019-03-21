import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BgContentAnimationComponent } from './bg-content-animation/bg-content-animation.component';
import { BgContentDirective } from './bg-content.directive';
import { CarouselLeftArrowComponent } from './bg-content-animation/carousel-left-arrow.component';
import { CarouselRightArrowComponent } from './bg-content-animation/carousel-right-arrow.component';
import { ArrowDirective } from './bg-content-animation/bg-arrow.directive';
import { MaterialModule } from '../material.module';


@NgModule({
    imports: [
        FlexLayoutModule,
        MaterialModule,
        CommonModule
    ],
    declarations: [
        BgContentAnimationComponent,
        CarouselLeftArrowComponent,
        CarouselRightArrowComponent,
        BgContentDirective,
        ArrowDirective
    ],
    exports: [
        BgContentAnimationComponent,
        CarouselLeftArrowComponent,
        CarouselRightArrowComponent,
        BgContentDirective,
        ArrowDirective
    ]
})
export class CarouselModule {

}
