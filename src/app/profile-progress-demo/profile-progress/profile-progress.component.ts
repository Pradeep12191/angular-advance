import { Component, Input, EventEmitter, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-profile-progress',
    templateUrl: './profile-progress.component.html',
    styleUrls: ['./profile-progress.component.scss']
})
export class ProfilePrgoressComponent implements OnInit, OnChanges {
    @Input() public profileCompeletionPercent = 0;
    @Input() public image;
    @Output() public imageSelected = new EventEmitter<any>();

    public svgHeight = 200; // svg height and width should be same to get square svg
    public svgWidth = 200;
    public imagePadding = 22;
    public fillStrokeWidth = 10;
    public fillStrokeColor = 'rgb(191, 31, 96)';
    public pathStrokeWidth = 10;
    public pathStrokeColor = '#e6e6e6';
    public dashArray = null;
    public dashOffset = null;

    public circleCenter; // calculated based on svg height and width;
    public imageArea;
    public imageOffset;
    public pathCircleRadius;
    public imageCircleRadius;
    public fillCircleRadius;
    public image64;
    ngOnInit() {

        // calculate and set attributes
        this.circleCenter = this.svgHeight / 2;
        this.pathCircleRadius  = (this.svgHeight / 2) - (this.pathStrokeWidth / 2) - this.imagePadding;
        this.imageCircleRadius = this.pathCircleRadius; // same as path radius;
        this.imageArea = this.imageCircleRadius * 2;
        this.imageOffset = (this.svgHeight - this.imageArea) / 2;
        this.fillCircleRadius = this.imageCircleRadius + 7;

        this.dashArray = this._calcProgress(0);
        this.dashOffset = this._calcProgress(0);
        setTimeout(() => {
            // to animate at intial load
            this.dashOffset = this._calcProgress(this.profileCompeletionPercent);
        }, 100);
    }

    ngOnChanges(changes: SimpleChanges) {
        const percent = changes['profileCompeletionPercent'];
        if (percent && !percent.firstChange && (percent.currentValue !== percent.previousValue)) {
            this.dashOffset = this._calcProgress(percent.currentValue);
        }
    }

    public onImageSelect(event) {
        return this.imageSelected.emit(event);
        const fileInput = event.target as HTMLInputElement;
        if (fileInput.files && fileInput.files[0]) {
            const file = fileInput.files[0];
            const fileReader = new FileReader();
            fileReader.onload = (fileEvent: any) => {
                // console.log(fileEvent.target);
                // this.imageDataUrl = fileReader.result;
                this.imageSelected.emit(fileReader.result);
            };
            fileReader.readAsDataURL(file);
        }
    }

    private _calcProgress(per?) {
        // circumfrence of the circle ( 2 * PI * r)
        const circumference = 2 * Math.PI * this.fillCircleRadius;
        if (!per) {
            return circumference;
        }
        return circumference * (1 - (per / 100));
    }

    private _calcCenter(height) {
        return height / 2;
    }

}
