import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule, MatListModule } from '@angular/material';


@NgModule({
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatListModule
    ]
})
export class MaterialModule {

}