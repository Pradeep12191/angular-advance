import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderLayoutComponent } from './header-layout.component';
import { PreloginLayoutComponent } from '../prelogin-layout/prelogin-layout.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'prelogin', component: HeaderLayoutComponent, outlet: 'header' }
    ])],
    exports: [RouterModule]
})
export class HeaderLayoutRoutingModule {

}
