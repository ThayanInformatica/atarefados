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

@Component({
  selector: 'app-minhas-tarefas',
  templateUrl: './minhas-tarefas.component.html',
  styleUrls: ['./minhas-tarefas.component.css'],
  providers: [TodasTarefasComponent]
})

export class MinhasTarefasComponent implements OnInit {

  public todasMinhasTarefas: TarefaModel[];
  todasTarefas: TarefaModel[];
  private usuarioModel: UsuarioModel = this.token.getUsuarioLogado();
  displayedColumns: string[] = ['nomeTarefa', 'dataTarefa', 'descricao', 'acao', 'conclusao'];

  constructor(private ref: ChangeDetectorRef, private router: Router, private tarefasComponent: TodasTarefasComponent, private todasTarefasService: TodasTarefasService, private conversoes: Conversoes, private token: TokenStorage, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.carregarTodasMinhasAsTarefas();
  }

  carregarTodasMinhasAsTarefas() {
    this.todasTarefasService.recuperarTodasMinhasTarefasDoDia(this.usuarioModel.idUsuario).subscribe(data => {
      this.todasMinhasTarefas = data;
      this.conversoes.FormataStringDataArrayDeTarefas(this.todasMinhasTarefas);

      this.carregarTodasAsTarefas();
    });
  }

  carregarTodasAsTarefas() {
    this.todasTarefasService.recuperarTodasTarefasDoDia().subscribe(data => {
      this.todasTarefas = data;

      this.conversoes.FormataStringDataArrayDeTarefas(this.todasTarefas);
    });
  }

  concluirTarefa(estadoTarefaModel: EstadoTarefaModel) {
    this.openDialog(estadoTarefaModel);
  }

  openDialog(estadoTarefaModel: EstadoTarefaModel): void {
    const dialogRef = this.dialog.open(MinhasTarefasDialogComponent, {
      width: '250px'
    }
    );
    dialogRef.componentInstance.onAdd.subscribe(() => {

      this.todasTarefasService.concluirTarefa(estadoTarefaModel).subscribe(result => {
        this.carregarTodasMinhasAsTarefas();
      });
    });
  }
}
