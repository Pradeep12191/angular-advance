import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AppService {
    public stickyClass = new Subject<'sticky-footer' | ''>();

    public stickyClassObs() {
        return this.stickyClass.asObservable();
    }

    public setStickyClass(cssClass) {
        setTimeout(() => {
            this.stickyClass.next(cssClass);
        });

    }
}
