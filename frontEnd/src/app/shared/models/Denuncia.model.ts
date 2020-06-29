import {UsuarioModel} from "./Usuario.model";
import {TarefaModel} from "./Tarefa.model";

export class DenunciaModel {
  idDenuncia: number;
  descricao: string;
  dataDenuncia: Date;
  tarefa: TarefaModel;
  usuario: UsuarioModel;
}
