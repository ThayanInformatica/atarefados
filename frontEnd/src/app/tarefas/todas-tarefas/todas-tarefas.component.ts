import {Component, OnInit} from '@angular/core';
import {TarefaModel} from '../../shared/models/Tarefa.model';
import {TodasTarefasService} from '../todas-tarefas.service';
import {Conversoes} from '../../shared/utils/conversoes';
import {MatDialog} from "@angular/material/dialog";
import {DenunciaTarefaDialogComponent} from "./dialog/denuncia-tarefa-dialog-component";
import {DenunciaModel} from "../../shared/models/Denuncia.model";
import {TokenStorage} from "../../core/token.storage";

@Component({
  selector: 'app-todas-tarefas',
  templateUrl: './todas-tarefas.component.html',
  styleUrls: ['./todas-tarefas.component.css']
})

export class TodasTarefasComponent implements OnInit {

  public todasTarefas: TarefaModel[];

  public denunciaModel: DenunciaModel;

  displayedColumns: string[] = ['nomeTarefa', 'dataTarefa', 'descricao', 'usuario', 'status'];

  constructor(private token: TokenStorage, public dialog: MatDialog, private todasTarefasService: TodasTarefasService, private conversoes: Conversoes) {
  }

  ngOnInit() {
    this.carregarTodasAsTarefas();
  }

  carregarTodasAsTarefas() {
    this.todasTarefasService.recuperarTodasTarefasDoDia().subscribe(data => {
      this.todasTarefas = data;

      this.conversoes.FormataStringDataArrayDeTarefas(this.todasTarefas);

      console.log(this.todasTarefas);

    });
  }

  openDialog(tarefaModel: TarefaModel): void {
    const dialogRef = this.dialog.open(DenunciaTarefaDialogComponent, {
      width: '500px'
    });
    dialogRef.componentInstance.onAdd.subscribe(result => {
      this.denunciaModel = result;
      this.denunciaModel.tarefa = tarefaModel;
      this.denunciaModel.usuario = this.token.getUsuarioLogado();

      this.todasTarefasService.denunciaTarefa(this.denunciaModel).subscribe(result => {
      });
    });
    dialogRef.afterClosed().subscribe(() => {
    })
  }

}
