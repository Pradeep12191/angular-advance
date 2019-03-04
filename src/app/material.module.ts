import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';


@NgModule({
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {

}
