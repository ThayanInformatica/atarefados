import {AuthService} from '../service/auth-service.service';
import {TokenStorage} from '../core/token.storage';
import {UsuarioLogado} from '../core/usuario-logado';
import {UsuarioLoginModel} from '../shared/models/UsuarioLogin.model';
import {UsuarioLoginAuthService} from '../service/UsuarioLoginAuth.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioLogado, FormBuilder, UsuarioLoginAuthService, UsuarioLoginModel]
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  usuarioLoginModel = new UsuarioLoginModel()

  constructor(private formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              private router: Router,
              public dialog: MatDialog,
              private authService: AuthService,
              private token: TokenStorage,
              private usuarioLogado: UsuarioLogado,
              private usuarioService: UsuarioLoginAuthService) {
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
        if (this.usuarioLoginModel.login === 'administrador') {
          this.router.navigate(['dashboard']);
        } else {
          this.router.navigate(['home']);
        }
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.verificarUsuario();
  }

  verificarUsuario() {
    this.usuarioService.verificarUsuario(this.usuarioLoginModel).subscribe(
      data => {
        this.login();
        this.token.salvarUsuario(data);
      }, error => {
        this.snackBar.open(error.error.message, 'Erro', {duration: 3000});
      });
  }


}
