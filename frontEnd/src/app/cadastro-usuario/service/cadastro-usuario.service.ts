import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from "@angular/common/http";
import {UsuarioLoginModel} from "../../shared/models/UsuarioLogin.model";
import {Observable, throwError} from "rxjs";
import {UsuarioModel} from "../../shared/models/Usuario.model";
import {UsuarioDto} from "../../shared/models/dto/Usuario.dto";

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  cadastrarUsuario(usuarioDto: UsuarioDto): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>( this.baseUrl + '/usuarios', usuarioDto)
      .map(res => res)
      .catch((error: object) => throwError(error));
  }
}
