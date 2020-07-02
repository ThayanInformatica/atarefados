import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {TarefaModel} from '../../shared/models/Tarefa.model';
import {TodasTarefasService} from '../todas-tarefas.service';
import {Conversoes} from '../../shared/utils/conversoes';
import {UsuarioModel} from '../../shared/models/Usuario.model';
import {TokenStorage} from '../../core/token.storage';
import {EstadoTarefaModel} from '../../shared/models/EstadoTarefa.model';
import {MatDialog} from "@angular/material/dialog";
import {MinhasTarefasDialogComponent} from "./dialog/minhas-tarefas-dialog-component";
import {TodasTarefasComponent} from "../todas-tarefas/todas-tarefas.component";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TarefaEstadoDto} from "../../shared/models/dto/TarefaEstado.dto";

@Component({
  selector: 'app-minhas-tarefas',
  templateUrl: './minhas-tarefas.component.html',
  styleUrls: ['./minhas-tarefas.component.css'],
  providers: [TodasTarefasComponent]
})

export class MinhasTarefasComponent implements OnInit {

  public todasMinhasTarefas: TarefaEstadoDto[] = [];
  todasTarefas: TarefaModel[];
  private usuarioModel: UsuarioModel = this.token.getUsuarioLogado();
  displayedColumns: string[] = ['nomeTarefa', 'dataTarefa', 'descricao', 'acao', 'conclusao'];

  constructor(private ref: ChangeDetectorRef,
              private router: Router,
              private tarefasComponent: TodasTarefasComponent,
              private todasTarefasService: TodasTarefasService,
              private conversoes: Conversoes,
              private token: TokenStorage,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.carregarTodasMinhasAsTarefas();
  }

  carregarTodasMinhasAsTarefas() {
    this.todasTarefasService.recuperarTodasMinhasTarefasDoDia(this.usuarioModel.idUsuario).subscribe(data => {
      this.todasMinhasTarefas = data;

      debugger
      this.carregarTodasAsTarefas();
    });
  }

  carregarTodasAsTarefas() {
    this.todasTarefasService.recuperarTodasTarefasDoDia().subscribe(data => {
      this.todasTarefas = data;

    });
  }

  concluirTarefa(tarefaModel: TarefaModel) {
    this.openDialog(tarefaModel);
  }

  openDialog(tarefaModel: TarefaModel): void {
    const dialogRef = this.dialog.open(MinhasTarefasDialogComponent, {
      width: '250px'
    }
    );
    dialogRef.componentInstance.onAdd.subscribe(() => {

      this.todasTarefasService.concluirTarefa(tarefaModel).subscribe(result => {
        this.carregarTodasMinhasAsTarefas();
      }, error => {
        this.snackBar.open(error.error.message, 'error', { duration: 3000 });
      });
    });
  }
}
