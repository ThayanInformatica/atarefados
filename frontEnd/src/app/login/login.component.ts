import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth-service.service';
import {TokenStorage} from '../core/token.storage';
import {MatDialog, MatSnackBar} from '@angular/material';
import {UsuarioLogado} from '../core/usuario-logado';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsuarioLoginModel} from '../shared/models/UsuarioLogin.model';
import {UsuarioLoginAuthService} from '../service/UsuarioLoginAuth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioLogado, FormBuilder, UsuarioLoginAuthService, UsuarioLoginModel]
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              private router: Router,
              public dialog: MatDialog,
              private authService: AuthService,
              private token: TokenStorage,
              private usuarioLogado: UsuarioLogado,
              private usuarioService: UsuarioLoginAuthService,
              private usuarioLoginModel: UsuarioLoginModel) {
  }
  ngOnInit() {
    this.usuarioLogado.verificarUsuarioLogado();

    this.registerForm = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    }, {
      // validator: MustMatch('password', 'confirmPassword')
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  login(): void {
    this.authService.attemptAuth(this.usuarioLoginModel).subscribe(
      data => {
        this.token.saveToken(data);
        this.router.navigate(['home']);
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.verificarUsuario();
    this.login();
  }

  verificarUsuario() {
    this.usuarioService.verificarUsuario(this.usuarioLoginModel).subscribe(
      data => {
      }, error => {
        this.snackBar.open(error.error.message, 'Erro', { duration: 3000 });
      });
  }

}
