import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './core/app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './service/auth-service.service';
import {TokenStorage} from './core/token.storage';
import {Interceptor} from './core/app.interceptor';
import {ErrorDialogComponent} from './core/error-dialog-component';
import {CustomMaterialModule} from './core/material.module';
import {LoaderComponent} from './loader/loader.component';
import {LoaderService} from "./loader/loader.service";
import {LoaderInterceptor} from "./loader/loader.interceptor";
import {HomeModule} from "./home/home.module";
import {SharedModule} from "./shared/shared.module";
import {CadastroDialogComponent} from "./shared/header/dialog/detalhe-da-guia-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorDialogComponent,
    LoaderComponent,
    CadastroDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    HomeModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  entryComponents: [
    ErrorDialogComponent,
    CadastroDialogComponent,
  ],

  providers: [LoaderService, ErrorDialogComponent, AuthService, TokenStorage, TokenStorage,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
