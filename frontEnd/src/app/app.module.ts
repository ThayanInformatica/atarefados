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
import {MatNativeDateModule} from '@angular/material/core';
import { HeaderComponent } from './shared/header/header.component';
import {MatSnackBarModule, MatStepperModule} from '@angular/material';
import { TodasTarefasComponent } from './tarefas/todas-tarefas/todas-tarefas.component';
import { TarefasConcluidasComponent } from './tarefas/tarefas-concluidas/tarefas-concluidas.component';
import { TarefasPendentesComponent } from './tarefas/tarefas-pendentes/tarefas-pendentes.component';
import { MinhasTarefasComponent } from './tarefas/minhas-tarefas/minhas-tarefas.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorDialogComponent,
    CadastroUsuarioComponent,
    HeaderComponent,
    TodasTarefasComponent,
    TarefasConcluidasComponent,
    TarefasPendentesComponent,
    MinhasTarefasComponent,
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
        MatNativeDateModule,
        MatSnackBarModule,
        MatStepperModule,
        FlexLayoutModule
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
