import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {UsuarioLoginModel} from '../shared/models/UsuarioLogin.model';
import 'rxjs-compat/add/operator/map';
import {environment} from '../../environments/environment';


@Injectable()
export class UsuarioLoginAuthService {

  constructor(private http: HttpClient) {
  }

  private baseUrl = environment.baseUrl;

  public getUsers(): Observable<any> {
    return this.http.get(this.baseUrl + '/usuarios');
  }

  verificarUsuario(usuario: UsuarioLoginModel): Observable<any> {
    return this.http.post(this.baseUrl + '/usuarios/verificar-usuario', usuario)
      .map(res => res)
      .catch((error: object) => throwError(error));
  }

}
