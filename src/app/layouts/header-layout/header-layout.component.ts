import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
    templateUrl: './header-layout.component.html'
})
export class HeaderLayoutComponent {
    public showToggle = false;
    constructor(
        private route: ActivatedRoute,
        private sidebarService: SidebarService
    ) {
        this.route.data.subscribe((data) => {
            this.showToggle = data.menuToggle;
        });
    }

    toggleSidenav() {
        this.sidebarService.toggleSidebar();
    }
}
