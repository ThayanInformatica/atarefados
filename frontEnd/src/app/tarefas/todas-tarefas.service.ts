import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {TarefaModel} from '../shared/models/Tarefa.model';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {EstadoTarefaModel} from '../shared/models/EstadoTarefa.model';
import {DenunciaModel} from "../shared/models/Denuncia.model";
import {TarefaEstadoDto} from "../shared/models/dto/TarefaEstado.dto";

@Injectable({
  providedIn: 'root'
})
export class TodasTarefasService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  recuperarTodasTarefasDoDia(): Observable<TarefaEstadoDto[]> {
    return this.http.get<TarefaEstadoDto[]>(this.baseUrl + '/tarefas/minhas-tarefas/' + null)
      .map(res => res)
      .catch((error: object) => throwError(error));
  }

  recuperarTodasMinhasTarefasDoDia(idUsuario: number): Observable<TarefaEstadoDto[]> {

    // let httpParams = new HttpParams();
    // httpParams.set("idUsuario", idUsuario.toString());

    return this.http.get<TarefaEstadoDto[]>(`${this.baseUrl}/tarefas/minhas-tarefas/${idUsuario}`)
      .map(res => res)
      .catch((error: object) => throwError(error));
  }

  recuperarEstadoTarefa(idTarefa: number): Observable<EstadoTarefaModel> {
    return this.http.get<EstadoTarefaModel>(this.baseUrl + '/tarefas/estado-tarefa/' + idTarefa)
      .map(res => res)
      .catch((error: object) => throwError(error));
  }

  concluirTarefa(tarefaModel: TarefaModel): Observable<EstadoTarefaModel> {
    return this.http.put<EstadoTarefaModel>(this.baseUrl + '/tarefas/concluir-tarefa/', tarefaModel)
      .map(res => res)
      .catch((error: object) => throwError(error));
  }

  denunciaTarefa(denunciaModel: DenunciaModel): Observable<DenunciaModel> {
    debugger
    return this.http.post<DenunciaModel>(this.baseUrl + '/tarefas/denunciar-tarefa/', denunciaModel)
      .map(res => res)
      .catch((error: object) => throwError(error));
  }

}
