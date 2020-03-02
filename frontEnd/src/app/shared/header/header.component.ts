import { Component, OnInit } from '@angular/core';
import {UsuarioLoginAuthService} from "../../service/UsuarioLoginAuth.service";
import {UsuarioLogado} from "../../core/usuario-logado";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UsuarioLogado]
})
export class HeaderComponent implements OnInit {

  private butao = false;

  constructor(private usuarioLogado: UsuarioLogado) { }

  ngOnInit() {
    this.butao = this.usuarioLogado.verificaSeTokenExiste();

  }

  deslogar(){
    this.usuarioLogado.logout();
  }

}
