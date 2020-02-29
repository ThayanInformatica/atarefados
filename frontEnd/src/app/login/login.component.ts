import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth-service.service';
import {TokenStorage} from '../core/token.storage';
import {MatDialog} from '@angular/material';
import {UsuarioLogado} from '../core/usuario-logado';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioLogado]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog, private authService: AuthService, private token: TokenStorage, private usuarioLogado: UsuarioLogado) {
  }

  userLogin: string;
  senha: string;

  ngOnInit() {
    this.usuarioLogado.verificarUsuarioLogado();

  }

  login(): void {
    this.authService.attemptAuth(this.userLogin, this.senha).subscribe(
      data => {
        this.token.saveToken(data);
        this.router.navigate(['home']);
      }
    );
  }
}
