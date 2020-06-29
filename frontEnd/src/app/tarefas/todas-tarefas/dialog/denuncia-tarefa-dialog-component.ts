import {Component, EventEmitter, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DenunciaModel} from "../../../shared/models/Denuncia.model";
import {TarefaModel} from "../../../shared/models/Tarefa.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  templateUrl: 'denuncia-tarefa-dialog.component.html',
  providers: [DenunciaModel]
})

export class DenunciaTarefaDialogComponent {
  onAdd = new EventEmitter();
  denunciaModel = ""

  constructor(private dialogRef: MatDialogRef<DenunciaTarefaDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: any,
              private snackBar: MatSnackBar) {

  }

  public closeDialog() {
    this.dialogRef.close();
  }

  denunciaTarefa() {
    if (this.denunciaModel === '') {
      this.snackBar.open('Preencha a descrição da denúncia', 'error', { duration: 3000 });
      return;
    }
    this.onAdd.emit(this.denunciaModel);
    this.closeDialog();
  }
}
