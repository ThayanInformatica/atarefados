import {EstadoTarefaModel} from "../EstadoTarefa.model";
import {TarefaModel} from "../Tarefa.model";

export class TarefaEstadoDto {
  tarefa: TarefaModel;
  estadoTarefa: EstadoTarefaModel;
}
