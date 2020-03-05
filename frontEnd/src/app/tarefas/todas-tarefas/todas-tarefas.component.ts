import {Component, OnInit} from '@angular/core';
import {TarefaModel} from '../../shared/models/Tarefa.model';
import {TodasTarefasService} from '../todas-tarefas.service';
import {Conversoes} from '../../shared/utils/conversoes';

@Component({
  selector: 'app-todas-tarefas',
  templateUrl: './todas-tarefas.component.html',
  styleUrls: ['./todas-tarefas.component.css']
})

export class TodasTarefasComponent implements OnInit {

  public todasTarefas: TarefaModel[];

  displayedColumns: string[] = ['nomeTarefa', 'dataTarefa', 'descricao', 'usuario'];

  constructor(private todasTarefasService: TodasTarefasService, private conversoes: Conversoes) {
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

}
