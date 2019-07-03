import { NgModule } from '@angular/core';
import {
  MatSidenavModule, MatToolbarModule, MatListModule, MatCardModule,
  MatIconModule, MatProgressSpinnerModule, MatButtonModule,
  MatTableModule, MatFormFieldModule, MatInputModule, MatSelectModule,
  MatDialogModule, MatDividerModule, MatSliderModule, MatDatepickerToggle,
  MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSortModule, MatMenuModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
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
    MatDialogModule,
    MatDividerModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatRadioModule,
    MatSortModule,
    MatMenuModule
  ]
})
export class MaterialModule {

}
