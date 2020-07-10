import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsuarioLoginModel} from "../../models/UsuarioLogin.model";
import {UsuarioDto} from "../../models/dto/Usuario.dto";
import {UsuarioModel} from "../../models/Usuario.model";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CadastroUsuarioService} from "./serviceDialog/cadastro-usuario.service";
import {MustMatch} from "./must-match";


@Component({
  templateUrl: 'detalhe-da-guia-dialog.component.html',
  styleUrls: ['./detalhe-da-guia-dialog.component.scss'],
})

export class CadastroDialogComponent implements OnInit {
  public submitted: boolean;
  registerForm: FormGroup;
  public usuarioLoginModel: UsuarioLoginModel = new UsuarioLoginModel();
  public usuarioDto: UsuarioDto = new UsuarioDto();
  public usuarioModel: UsuarioModel = new UsuarioModel();

  constructor(private dialogRef: MatDialogRef<CadastroDialogComponent>,
              private formBuilder: FormBuilder,
              private serviceCadastroUsuario: CadastroUsuarioService, private router: Router, private snackBar: MatSnackBar,) {

  }

  ngOnInit(): void {
    this.patchForm();
  }

  public get f() {
    return this.registerForm.controls;
  }

  private patchForm(): void {
    this.registerForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(5)]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      nomeUsuario: ['', [Validators.required, Validators.minLength(5)]],
      confirmaSenha: ['', Validators.required],
      dataNascimento: [new Date(), Validators.required],
    }, {
      validator: MustMatch('senha', 'confirmaSenha')
    });
  }

  salvarUsuario() {
    this.usuarioDto.usuarioLogin = this.usuarioLoginModel;
    this.usuarioDto.usuario = this.usuarioModel;
    this.serviceCadastroUsuario.cadastrarUsuario(this.usuarioDto).subscribe(data => {
      this.router.navigate(['login']);
      this.snackBar.open('Cadastrado com sucesso', 'sucess', {duration: 3000});
      this.closeDialog();
    }, error => {
      this.snackBar.open(error.error.message, 'error', {duration: 3000});
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.salvarUsuario();
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
