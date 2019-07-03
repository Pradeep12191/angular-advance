import { BrowserModule, } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './services/app.service';
import { PreloginLayoutComponent } from './layouts/prelogin-layout/prelogin-layout.component';
import { LoginComponent } from './login/login.component';
import { PostLoginLayoutComponent } from './layouts/postlogin-layout/postlogin-layout.component';
import { HeaderLayoutModule } from './layouts/header-layout/header-layout.module';
import { LoaderComponent } from './loader/loader.component';
import { FooterLayoutModule } from './layouts/footer-layout/footer-layout.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HeaderLayoutModule,
    FooterLayoutModule,
  ],
  declarations: [
    AppComponent,
    PreloginLayoutComponent,
    LoginComponent,
    PostLoginLayoutComponent,
    LoaderComponent
  ],
  providers: [AppService],
  bootstrap: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
