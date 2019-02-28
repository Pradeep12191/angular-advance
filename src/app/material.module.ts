import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule } from '@angular/material';


@NgModule({
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule
    ]
})
export class MaterialModule {

}
