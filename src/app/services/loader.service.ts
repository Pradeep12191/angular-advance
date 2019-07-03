import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {
    public loaderSubject = new BehaviorSubject(false);

    public hideLoader() {
        this.loaderSubject.next(false);
    }

    public showLoader() {
        this.loaderSubject.next(true);
    }

    public loaderObs() {
        return this.loaderSubject.asObservable();
    }
}
