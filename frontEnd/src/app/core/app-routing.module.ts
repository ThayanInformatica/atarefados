import { NovaTarefaComponent } from './../tarefas/nova-tarefa/nova-tarefa.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {CadastroUsuarioComponent} from '../cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', loadChildren: '../home/home.module#HomeModule'},
  {path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule'},
  {path: 'cadastrar-usuario', component: CadastroUsuarioComponent},
  {path: 'nova-tarefa', component: NovaTarefaComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
