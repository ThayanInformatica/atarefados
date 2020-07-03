import { TodasTarefasService } from './../todas-tarefas.service';
import { TarefaModel } from './../../shared/models/Tarefa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefas-concluidas',
  templateUrl: './tarefas-concluidas.component.html',
  styleUrls: ['./tarefas-concluidas.component.css']
})
export class TarefasConcluidasComponent implements OnInit {

  displayedColumns: string[] = ['nomeTarefa', 'dataTarefa', 'descricao', 'usuario', 'estado'];
  todasTarefasConcluidas: TarefaModel;

  constructor(private tarefaService: TodasTarefasService) { }

  ngOnInit() {
    this.recuperarTarefasConcluidas();
  }

  recuperarTarefasConcluidas(){
    this.tarefaService.recuperarTarefasConcluidas()
      .subscribe(data => {
        this.todasTarefasConcluidas = data;
      })
  }
}
