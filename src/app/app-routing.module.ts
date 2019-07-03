import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloginLayoutComponent } from './layouts/prelogin-layout/prelogin-layout.component';
import { PostLoginLayoutComponent } from './layouts/postlogin-layout/postlogin-layout.component';
import { LoginComponent } from './login/login.component';
import { HeaderLayoutComponent } from './layouts/header-layout/header-layout.component';
import { FooterLayoutComponent } from './layouts/footer-layout/footer-layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },

  {
    path: '', component: PreloginLayoutComponent, children: [
      { path: '', component: HeaderLayoutComponent, outlet: 'header' },
      { path: '', component: FooterLayoutComponent, outlet: 'footer' },
      { path: 'login', component: LoginComponent },
    ]
  },
  {
    path: 'home', component: PostLoginLayoutComponent, loadChildren: './postlogin.module#PostLoginModule'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
