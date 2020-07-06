import {TarefaModel} from './Tarefa.model';

export class EstadoTarefaModel {
  idEstado: number;
  concluida = false;
  pendente = true;
  naoFeita = false;
  denuncia = false;
  dataConclusao: string;
  tarefa: TarefaModel;
}
