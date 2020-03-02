import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from "@angular/common/http";
import {UsuarioLoginModel} from "../../shared/models/UsuarioLogin.model";
import {Observable, throwError} from "rxjs";
import {UsuarioModel} from "../../shared/models/Usuario.model";

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  cadastrarUsuario(usuario: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post( this.baseUrl + '/usuarios', usuario)
      .map(res => usuario)
      .catch((error: object) => throwError(error));
  }
}
