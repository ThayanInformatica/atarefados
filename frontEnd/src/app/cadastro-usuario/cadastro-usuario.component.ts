import {Component, Input, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MustMatch} from './must-match';
import {MatDatepicker } from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {UsuarioModel} from "../shared/models/Usuario.model";
import {CadastroUsuarioService} from "./service/cadastro-usuario.service";
import {UsuarioLoginModel} from "../shared/models/UsuarioLogin.model";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
// @ts-ignore

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD',
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css'],
  providers:[MatDatepicker, { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },]
})
export class CadastroUsuarioComponent implements OnInit {
  private submitted: boolean;
  registerForm: FormGroup;
  public  usuarioLoginModel: UsuarioLoginModel = new UsuarioLoginModel();
  public  usuarioModel: UsuarioModel = new UsuarioModel();

  constructor(private formBuilder: FormBuilder, private matDatepicker: MatDatepicker<any>,
              private serviceCadastroUsuario: CadastroUsuarioService,    private router: Router,  private snackBar: MatSnackBar, ) {
  }

  ngOnInit() {

    this.submitted = false;
    this.registerForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(5)]],
      nomeUsuario: ['',[Validators.required, Validators.minLength(5)]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmaSenha: ['', Validators.required],
      dataNascimento: ['', Validators.required],
    }, {
      validator: MustMatch('senha', 'confirmaSenha')
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  salvarUsuario() {
    this.usuarioModel.usuarioLogin = this.usuarioLoginModel;
    this.serviceCadastroUsuario.cadastrarUsuario(this.usuarioModel).subscribe(data => {
    this.router.navigate(['login']);
    this.snackBar.open('Cadastrado com sucesso', 'sucess', { duration: 3000 });
    }, error => {
      this.snackBar.open(error.error.message, 'error', { duration: 3000 });
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.salvarUsuario();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}




