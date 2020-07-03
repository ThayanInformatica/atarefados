import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {TarefaModel} from '../shared/models/Tarefa.model';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {EstadoTarefaModel} from '../shared/models/EstadoTarefa.model';
import {DenunciaModel} from "../shared/models/Denuncia.model";

@Injectable({
  providedIn: 'root'
})
export class TodasTarefasService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  recuperarTodasTarefasDoDia(): Observable<TarefaModel[]> {
    return this.http.get<TarefaModel[]>(this.baseUrl + '/tarefas/todas-tarefas-do-dia')
      .map(res => res)
      .catch((error: object) => throwError(error));
  }

  recuperarTodasMinhasTarefasDoDia(idUsuario: number): Observable<TarefaModel[]> {
    return this.http.get<TarefaModel[]>(this.baseUrl + '/tarefas/minhas-tarafas/' + idUsuario)
      .map(res => res)
      .catch((error: object) => throwError(error));
  }

  recuperarEstadoTarefa(idTarefa: number): Observable<EstadoTarefaModel> {
    return this.http.get<EstadoTarefaModel>(this.baseUrl + '/tarefas/estado-tarefa/' + idTarefa)
      .map(res => res)
      .catch((error: object) => throwError(error));
  }

  concluirTarefa(estadoTarefaModel: EstadoTarefaModel): Observable<EstadoTarefaModel> {
    return this.http.put<EstadoTarefaModel>(this.baseUrl + '/tarefas/concluir-tarefa/', estadoTarefaModel)
      .map(res => res)
      .catch((error: object) => throwError(error));
  }

  denunciaTarefa(denunciaModel: DenunciaModel): Observable<DenunciaModel> {
    return this.http.post<DenunciaModel>(this.baseUrl + '/tarefas/denunciar-tarefa/', denunciaModel)
      .map(res => res)
      .catch((error: object) => throwError(error));
  }

  recuperarTarefasPendentes(): Observable<TarefaModel>{
    return this.http.get<TarefaModel>(`${this.baseUrl}/tarefas/pendentes`)
      .map(res => res)
      .catch((error: object) => throwError(error));
  }

  recuperarTarefasConcluidas(): Observable<TarefaModel>{
    return this.http.get<TarefaModel>(`${this.baseUrl}/tarefas/concluidas`)
    .map(res => res)
    .catch((error: object) => throwError(error));
  }

}
