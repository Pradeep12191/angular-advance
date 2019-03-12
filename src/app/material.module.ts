import { NgModule } from '@angular/core';
import {
  MatSidenavModule, MatToolbarModule, MatListModule, MatCardModule,
  MatIconModule, MatProgressSpinnerModule, MatButtonModule,
  MatTableModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDialogModule
} from '@angular/material';
@NgModule({
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule
  ]
})
export class MaterialModule {

}
