import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
    selector: 'app-loader',
    template: `
        <div *ngIf="showLoader" class="spinner">
            <mat-spinner></mat-spinner>
        </div>`,
    styles: [`
    .spinner{
        position: fixed;
        z-index: 999;
        background: rgba(0, 0, 0, 0.1);
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      `]
})
export class LoaderComponent implements OnInit {
    public showLoader;
    constructor(
        private loader: LoaderService
    ) {

    }

    ngOnInit() {
        this.loader.loaderObs().subscribe((showLoader) => {
            this.showLoader = showLoader;
        });
    }
}
