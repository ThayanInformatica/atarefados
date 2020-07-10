import { Component, OnInit } from '@angular/core';
import {UsuarioLoginAuthService} from "../../service/UsuarioLoginAuth.service";
import {UsuarioLogado} from "../../core/usuario-logado";
import {Router} from "@angular/router";
import {CadastroDialogComponent} from "./dialog/detalhe-da-guia-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UsuarioLogado]
})
export class HeaderComponent implements OnInit {

  private butao = false;

  constructor(private usuarioLogado: UsuarioLogado, private router: Router,
              private dialog: MatDialog,) { }

  ngOnInit() {
    this.butao = this.usuarioLogado.verificaSeTokenExiste();

  }

  deslogar(){
    this.usuarioLogado.logout();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CadastroDialogComponent, {
        width: '700px',
        height: '450px',
      }
    );
  }

}
