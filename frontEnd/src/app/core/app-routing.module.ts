import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../home/home.component';
import {CadastroUsuarioComponent} from '../cadastro-usuario/cadastro-usuario.component';
import {HomeModule} from "../home/home.module";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'home', loadChildren: '../home/home.module#HomeModule'},
  { path: 'cadastrar-usuario', component: CadastroUsuarioComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
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
