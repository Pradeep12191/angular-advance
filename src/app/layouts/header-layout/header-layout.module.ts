import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';

import { HeaderLayoutComponent } from './header-layout.component';
import { HeaderLayoutRoutingModule } from './header-layout-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [MatToolbarModule, FlexLayoutModule, CommonModule, HeaderLayoutRoutingModule, MatIconModule, MatButtonModule],
    declarations: [HeaderLayoutComponent],
    exports: [HeaderLayoutComponent, HeaderLayoutRoutingModule]
})
export class HeaderLayoutModule {

}
