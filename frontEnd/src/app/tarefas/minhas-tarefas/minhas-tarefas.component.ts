import {Component, OnInit} from '@angular/core';
import {TarefaModel} from '../../shared/models/Tarefa.model';
import {TodasTarefasService} from '../todas-tarefas.service';
import {Conversoes} from '../../shared/utils/conversoes';
import {UsuarioModel} from '../../shared/models/Usuario.model';
import {TokenStorage} from '../../core/token.storage';
import {format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import {EstadoTarefaModel} from '../../shared/models/EstadoTarefa.model';

@Component({
  selector: 'app-minhas-tarefas',
  templateUrl: './minhas-tarefas.component.html',
  styleUrls: ['./minhas-tarefas.component.css']
})

export class MinhasTarefasComponent implements OnInit {

  public todasMinhasTarefas: TarefaModel[];

  private usuarioModel: UsuarioModel = this.token.getUsuarioLogado();

  displayedColumns: string[] = ['nomeTarefa', 'dataTarefa', 'descricao', 'acao'];

  constructor(private todasTarefasService: TodasTarefasService, private conversoes: Conversoes, private token: TokenStorage) {
  }

  ngOnInit() {
    this.carregarTodasMinhasAsTarefas();
  }

  carregarTodasMinhasAsTarefas() {
    this.todasTarefasService.recuperarTodasMinhasTarefasDoDia(this.usuarioModel.idUsuario).subscribe(data => {
      this.todasMinhasTarefas = data;
      // console.log(data);
      this.conversoes.FormataStringDataArrayDeTarefas(this.todasMinhasTarefas);
      // console.log(this.todasMinhasTarefas);
    });
  }
}
