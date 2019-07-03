import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';

import { ImageCropperModule } from 'ngx-image-cropper';

import { ImageCropDialogComponent } from './image-crop-dialog/image-crop-dialog.component';
import { ProfilePrgoressComponent } from './profile-progress/profile-progress.component';

@NgModule({
    imports: [MatButtonModule, ImageCropperModule, MatDialogModule],
    declarations: [ImageCropDialogComponent, ProfilePrgoressComponent],
    entryComponents: [ImageCropDialogComponent],
    exports: [ProfilePrgoressComponent]
})
export class ProfileProgressModule {

}
