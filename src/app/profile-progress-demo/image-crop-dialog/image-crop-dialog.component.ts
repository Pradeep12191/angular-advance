import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
    templateUrl: './image-crop-dialog.component.html',
    styleUrls: ['./image-crop-dialog.component.scss'],
})
export class ImageCropDialogComponent implements OnInit {
    public result: { croppedImage: any } = { croppedImage: null };
    constructor(
        @Inject(MAT_DIALOG_DATA) public data
    ) {

    }

    ngOnInit() {

    }

    onImageCropped(event: ImageCroppedEvent) {
        console.log(event);
        const fileReader = new FileReader();
        fileReader.onloadend = (fileEvent) => {
            console.log(fileEvent);
        }
        fileReader.readAsArrayBuffer(event.file);

        this.result.croppedImage = event.base64;
    }
}
