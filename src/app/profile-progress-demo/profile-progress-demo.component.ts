import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { MatDialog, MatSliderChange } from '@angular/material';
import { ImageCropDialogComponent } from './image-crop-dialog/image-crop-dialog.component';



@Component({
  selector: 'app-profile-progress-demo',
  templateUrl: './profile-progress-demo.component.html',
  styleUrls: ['./profile-progress-demo.component.css']
})
export class ProfileProgressDemoComponent {


  public imageDataUrl = './assets/images/Velazquez.jpg';
  public profileCompeletionPercent = 42;

  constructor(
    private matDialog: MatDialog
  ) { }


  onImageSelected(selectedImage: any) {
    console.log('intialImage', selectedImage);
    const imageCropDialogRef = this.matDialog.open(ImageCropDialogComponent, { data: { image: selectedImage } });
    imageCropDialogRef.afterClosed().subscribe((result) => {
      console.log('croppedImage', result.croppedImage);
      this.imageDataUrl = result.croppedImage;
    });
  }

  onSliderInput(e: MatSliderChange) {
    this.profileCompeletionPercent = e.value;
  }

}
