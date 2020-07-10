import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {UsuarioDto} from "../../../models/dto/Usuario.dto";
import {UsuarioModel} from "../../../models/Usuario.model";


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
