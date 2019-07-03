import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(
        private loader: LoaderService,
        private router: Router
    ) {

    }
    login() {
        this.loader.showLoader();
        timer(1000).subscribe(() => {
            this.router.navigate(['home', 'structuralDirective']);
        });
    }
}
