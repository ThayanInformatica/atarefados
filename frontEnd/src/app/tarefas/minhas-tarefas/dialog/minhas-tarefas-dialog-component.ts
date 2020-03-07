import {Component, EventEmitter, Inject, Injectable} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EstadoTarefaModel} from "../../../shared/models/EstadoTarefa.model";
import {TodasTarefasService} from "../../todas-tarefas.service";
import {MinhasTarefasComponent} from "../minhas-tarefas.component";

@Component({
  templateUrl: 'minhas-tarefas-dialog.component.html'
})

export class MinhasTarefasDialogComponent {
  onAdd = new EventEmitter();

  constructor(private todasTarefasService: TodasTarefasService, private dialogRef: MatDialogRef<MinhasTarefasDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  public closeDialog() {
    this.dialogRef.close();
  }

  tarefaConfirmada() {
    this.onAdd.emit();
    this.closeDialog();
  }
}
