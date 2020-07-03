import { TodasTarefasService } from './../todas-tarefas.service';
import { TarefaModel } from './../../shared/models/Tarefa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefas-pendentes',
  templateUrl: './tarefas-pendentes.component.html',
  styleUrls: ['./tarefas-pendentes.component.css']
})
export class TarefasPendentesComponent implements OnInit {

  displayedColumns: string[] = ['nomeTarefa', 'dataTarefa', 'descricao', 'usuario', 'estado'];
  todasTarefasPendentes: TarefaModel;

  constructor(private tarefaService: TodasTarefasService) { }

  ngOnInit() {
    this.recuperarTarefasPendentes();
  }

  recuperarTarefasPendentes(){
    this.tarefaService.recuperarTarefasPendentes()
      .subscribe(data => {
        this.todasTarefasPendentes = data;
      })
  }
}
