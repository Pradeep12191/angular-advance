import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { FooterLayoutComponent } from './footer-layout.component';

@NgModule({
    imports: [MatToolbarModule],
    declarations: [FooterLayoutComponent],
    exports: [FooterLayoutComponent]
})
export class FooterLayoutModule {

}