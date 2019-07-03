import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../services/app.service';
import { MediaObserver } from '@angular/flex-layout';
import { Router, ActivationEnd } from '@angular/router';
import { LoaderService } from '../../services/loader.service';
import { MatSidenav } from '@angular/material';

@Component({
    templateUrl: './prelogin-layout.component.html',
    styles: [`
        mat-sidenav-container{
            height: calc(100% - 128px)
        }
    `]
})
export class PreloginLayoutComponent implements OnInit {
    public stickyClass$;
    public openSideNav;
    @ViewChild(MatSidenav) sidenav: MatSidenav;
    constructor(
        private appService: AppService,
        private loader: LoaderService,
        private router: Router
    ) {

    }


    ngOnInit() {
        this.stickyClass$ = this.appService.stickyClassObs();
    }

}
