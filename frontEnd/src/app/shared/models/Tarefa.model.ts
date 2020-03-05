import {UsuarioModel} from './Usuario.model';
import {EstadoTarefaModel} from './EstadoTarefa.model';

export class TarefaModel {
  idTarefa: number;
  descricao: string;
  nomeTarefa: string;
  dataTarefa: string;
  usuario: UsuarioModel;
  estadoTarefa: EstadoTarefaModel;
}
