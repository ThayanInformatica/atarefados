import {Injectable} from '@angular/core';
import {TarefaModel} from '../models/Tarefa.model';
import {format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

@Injectable({
  providedIn: 'root'
})
export class Conversoes {

  FormataStringDataArrayDeTarefas(todasTarefas: TarefaModel[]) {
    todasTarefas.map(tarefa => {
      tarefa.dataTarefa = format(new Date(tarefa.dataTarefa), 'PPPPpp', {locale: ptBR});
    });
  }
}
