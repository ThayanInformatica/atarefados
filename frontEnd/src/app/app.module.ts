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
import {CadastroUsuarioComponent} from './cadastro-usuario/cadastro-usuario.component';
import {LoaderComponent} from './loader/loader.component';
import {LoaderService} from "./loader/loader.service";
import {LoaderInterceptor} from "./loader/loader.interceptor";
import {HomeModule} from "./home/home.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorDialogComponent,
    CadastroUsuarioComponent,
    LoaderComponent
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
        ReactiveFormsModule
    ],
  entryComponents: [ErrorDialogComponent],
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
