import { Component, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { SidebarService } from '../../services/sidebar.service';
import { MatSidenav } from '@angular/material';
import { RouterEvent, Router, ActivationEnd } from '@angular/router';
import { LoaderService } from '../../services/loader.service';

@Component({
    templateUrl: './postlogin-layout.component.html',
    styles: [`
    mat-sidenav-container{
        height: calc(100% - 128px)
    }
`]
})
export class PostLoginLayoutComponent {

    @ViewChild(MatSidenav) sidenav: MatSidenav;

    public isSmallDevice = false;
    public openSideNav = false;
    constructor(
        private mediaObserver: MediaObserver,
        private sidebarService: SidebarService,
        private router: Router,
        private loader: LoaderService
    ) {
        this.mediaObserver.media$.subscribe((media) => {
            console.log('media alias', media);
            if (media.mqAlias === 'xs') {
                this.isSmallDevice = true;
                this.openSideNav = false;
            } else {
                this.isSmallDevice = false;
                this.openSideNav = true;
            }
        });

        this.sidebarService.sidebarObs().subscribe(() => {
            this.sidenav.toggle();
        });

        this.router.events.subscribe((event) => {
            if (event instanceof ActivationEnd) {
                this.loader.hideLoader();
            }
        });
    }
}
