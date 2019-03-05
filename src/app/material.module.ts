import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule, MatListModule, MatCardModule,
  MatIconModule, MatProgressSpinnerModule, MatButtonModule} from '@angular/material';
@NgModule({
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MaterialModule {

}
