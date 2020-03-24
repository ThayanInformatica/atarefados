import {ChangeDetectorRef, Component, Inject, Input, OnInit} from '@angular/core';
import {TarefaModel} from '../../shared/models/Tarefa.model';
import {TodasTarefasService} from '../todas-tarefas.service';
import {Conversoes} from '../../shared/utils/conversoes';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material";
import {DenunciaTarefaDialogComponent} from "./dialog/denuncia-tarefa-dialog-component";
import {DenunciaModel} from "../../shared/models/Denuncia.model";
import {TokenStorage} from "../../core/token.storage";
import {MatDialogRef} from "@angular/material/dialog";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-todas-tarefas',
  templateUrl: './todas-tarefas.component.html',
  styleUrls: ['./todas-tarefas.component.css']
})

export class TodasTarefasComponent implements OnInit {

  @Input() todasTarefas: TarefaModel[] = [];
           denunciaModel: DenunciaModel;

  displayedColumns: string[] = ['nomeTarefa', 'dataTarefa', 'descricao', 'usuario', 'status'];

  constructor(public changeDetectorRefs: ChangeDetectorRef,
              private token: TokenStorage,
              public dialog: MatDialog,
              private todasTarefasService: TodasTarefasService,
              private conversoes: Conversoes,
              private router: Router) {
  }


  ngOnInit() {
    this.changeDetectorRefs.detectChanges();
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
