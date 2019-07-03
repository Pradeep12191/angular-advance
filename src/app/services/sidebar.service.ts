import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SidebarService {
    sidebar = new Subject();

    sidebarObs() {
        return this.sidebar;
    }

    toggleSidebar() {
        this.sidebar.next();
    }

}
