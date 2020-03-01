import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './service/auth-service.service';
import {TokenStorage} from './core/token.storage';
import {Interceptor} from './core/app.interceptor';
import {ErrorDialogComponent} from './core/error-dialog-component';
import { HomeComponent } from './home/home.component';
import {CustomMaterialModule} from './core/material.module';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorDialogComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents: [ErrorDialogComponent],
  providers: [ErrorDialogComponent, AuthService, TokenStorage, TokenStorage,
    {provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
