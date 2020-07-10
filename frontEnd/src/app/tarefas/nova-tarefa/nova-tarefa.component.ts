import { MatSnackBar } from '@angular/material/snack-bar';
import { TodasTarefasService } from './../todas-tarefas.service';
import { TarefaModel } from './../../shared/models/Tarefa.model';
import { UsuarioModel } from './../../shared/models/Usuario.model';
import { UsuarioService } from './../../service/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { EstadoTarefaModel } from 'src/app/shared/models/EstadoTarefa.model';
import {AppStepEnum} from "../../shared/models/enum/app-step.enum.model";

@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.component.html',
  styleUrls: ['./nova-tarefa.component.css']
})
export class NovaTarefaComponent implements OnInit {

  @Output() changeApp = new EventEmitter();

  appStep = AppStepEnum;
  tarefaForm: FormGroup;
  todosUsuarios: UsuarioModel[];
  novaTarefa = new TarefaModel();
  novoEstadoTarefa = new EstadoTarefaModel();

  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private tarefaService: TodasTarefasService,
              private snackBar: MatSnackBar) {  }

  ngOnInit() {

    this.tarefaForm = this.formBuilder.group({
      tarefaNome: [null, [Validators.required]],
      tarefaDescricao: [null, [Validators.required]],
      tarefaData: [null, [Validators.required]],
      tarefaUsuario: [null, [Validators.required]]
    });

      this.listarUsuarios();
  }

  listarUsuarios(){
    this.usuarioService.listarUsuarios()
      .subscribe((data : any) => {
        this.todosUsuarios = data.map(p => {
          return { value: p.idUsuario, viewValue: p.nomeUsuario };
        })
      })
  }

  onSubmit(){
    this.criarEstadoTarefa();
    // this.criarEstadoTarefa();

    // setTimeout(function() {
    //   this.criarTarefa();
    // }.bind(this), 500);
  }

  criarEstadoTarefa(){
    this.tarefaService.criarEstadoTarefa(this.novoEstadoTarefa)
      .subscribe( data => {
        this.novoEstadoTarefa = data;
        this.novaTarefa.estadoTarefa = this.novoEstadoTarefa;
        this.criarTarefa();
      }, error => {
        this.snackBar.open(error.error.message, 'error', {duration: 3000});
      });
  }

  criarTarefa(){
    this.tarefaService.criarTarefa(this.novaTarefa)
      .subscribe(data => {
        this.novaTarefa = new TarefaModel();
        this.tarefaForm.reset();
        this.tarefaForm.controls.tarefaNome.markAsPending();
        this.tarefaForm.controls.tarefaDescricao.markAsPending();
        this.tarefaForm.controls.tarefaData.markAsPending();
        this.tarefaForm.controls.tarefaUsuario.markAsPending();
        console.log('Form Group: ', this.tarefaForm)
        this.snackBar.open('Item criado com sucesso!', 'sucess', {duration: 3000});
      }, error => {
        this.snackBar.open(error.error.message, 'error', {duration: 3000});
      });
  }

  get inputValid(){
    return this.tarefaForm.controls;
  }

  verificaValidTouched(campo){
    return !this.tarefaForm.get(campo).valid && this.tarefaForm.get(campo).touched;
  }

  verificaData(campo){
    var currentDate = new Date();
    if(this.tarefaForm.get(campo).value === null){
      return false;
    }
    if(this.tarefaForm.get(campo).value < currentDate){
      return true;
    }
  }

  voltarDashBoard() {
    this.changeApp.emit(this.appStep.INDEX_TELA);
  }
}
