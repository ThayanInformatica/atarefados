import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {TarefaModel} from '../shared/models/Tarefa.model';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {EstadoTarefaModel} from '../shared/models/EstadoTarefa.model';

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

}
