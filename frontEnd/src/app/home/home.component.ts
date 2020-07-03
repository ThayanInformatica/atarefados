import {Component, OnInit} from '@angular/core';
import {TokenStorage} from '../core/token.storage';
import {Router} from '@angular/router';
import {UsuarioLogado} from '../core/usuario-logado';
import {MatTabChangeEvent} from "@angular/material/tabs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UsuarioLogado]
})

export class HomeComponent implements OnInit {
  step: number = TarefaSteps.MINHAS_TAREFA;
  TarefaSteps = TarefaSteps;


  constructor(private token: TokenStorage,
              private router: Router,
              private usuarioLogado: UsuarioLogado) {
  }

  ngOnInit() {
    this.usuarioLogado.verificarUsuarioLogado();
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
