import {TarefaModel} from './Tarefa.model';

export class EstadoTarefaModel {
  idEstado: number;
  concluida: boolean;
  pendente: boolean;
  naoFeita: boolean;
  denuncia: boolean;
  dataConclusao: string;
  tarefa: TarefaModel;
}
