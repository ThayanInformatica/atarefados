import {Component, EventEmitter, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DenunciaModel} from "../../../shared/models/Denuncia.model";
import {TarefaModel} from "../../../shared/models/Tarefa.model";

@Component({
  templateUrl: 'denuncia-tarefa-dialog.component.html',
  providers: [DenunciaModel]
})

export class DenunciaTarefaDialogComponent {
  onAdd = new EventEmitter();

  constructor(private denunciaModel: DenunciaModel, private dialogRef: MatDialogRef<DenunciaTarefaDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  public closeDialog() {
    this.dialogRef.close();
  }

  denunciaTarefa() {
    this.onAdd.emit(this.denunciaModel);
    this.closeDialog();
  }
}
