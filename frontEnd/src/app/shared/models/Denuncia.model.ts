import {UsuarioModel} from "./Usuario.model";
import {TarefaModel} from "./Tarefa.model";

export class DenunciaModel {
  idDenuncia: number;
  descricao: string;
  dataDenuncia: string;
  tarefa: TarefaModel;
  usuario: UsuarioModel;
}
