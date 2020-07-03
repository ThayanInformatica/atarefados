import { Component, OnInit } from '@angular/core';
import {MatTabChangeEvent} from "@angular/material/tabs";

@Component({
  selector: 'app-tarefas-home',
  templateUrl: './tarefas-home.component.html',
  styleUrls: ['./tarefas-home.component.css']
})
export class TarefasHomeComponent implements OnInit {

  step: number = TarefaSteps.MINHAS_TAREFA;
  TarefaSteps = TarefaSteps;

  constructor() { }

  ngOnInit() {
  }

  onTabChange(clickedTab: MatTabChangeEvent): void {
    this.step = clickedTab.index;
  }

}

export const TarefaSteps = {
  MINHAS_TAREFA: 0,
  CONCLUIDAS: 1,
  PENDENTES: 2
};
