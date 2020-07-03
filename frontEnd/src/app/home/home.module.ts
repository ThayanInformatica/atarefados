import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MinhasTarefasComponent} from "../tarefas/minhas-tarefas/minhas-tarefas.component";
import {TodasTarefasComponent} from "../tarefas/todas-tarefas/todas-tarefas.component";
import {TarefasPendentesComponent} from "../tarefas/tarefas-pendentes/tarefas-pendentes.component";
import {TarefasConcluidasComponent} from "../tarefas/tarefas-concluidas/tarefas-concluidas.component";
import {MinhasTarefasDialogComponent} from "../tarefas/minhas-tarefas/dialog/minhas-tarefas-dialog-component";
import {DenunciaTarefaDialogComponent} from "../tarefas/todas-tarefas/dialog/denuncia-tarefa-dialog-component";
import {HomeComponent} from "./home.component";
import {CustomMaterialModule} from "../core/material.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import { TarefasHomeComponent } from './tarefas-home/tarefas-home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
];

@NgModule({
  declarations: [
    HomeComponent,
    TarefasConcluidasComponent,
    TarefasPendentesComponent,
    MinhasTarefasComponent,
    TodasTarefasComponent,
    MinhasTarefasDialogComponent,
    DenunciaTarefaDialogComponent,
    TarefasHomeComponent,
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  entryComponents: [
    TarefasConcluidasComponent,
    TarefasPendentesComponent,
    MinhasTarefasComponent,
    TodasTarefasComponent,
    MinhasTarefasDialogComponent,
    DenunciaTarefaDialogComponent],
  exports: [
    TodasTarefasComponent,
    TarefasConcluidasComponent,
    MinhasTarefasComponent,
    TarefasPendentesComponent,
    HomeComponent,
    TarefasHomeComponent,
  ],
  providers: [MinhasTarefasDialogComponent, DenunciaTarefaDialogComponent]
})
export class HomeModule {
}
