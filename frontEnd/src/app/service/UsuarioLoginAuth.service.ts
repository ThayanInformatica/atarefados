import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {UsuarioLoginModel} from '../shared/models/UsuarioLogin.model';
import 'rxjs-compat/add/operator/map';
import {errorObject} from 'rxjs/internal-compatibility';
import {environment} from '../../environments/environment';

@Injectable()
export class UsuarioLoginAuthService {

  constructor(private http: HttpClient) {
  }

  private baseUrl = environment.baseUrl;

  public getUsers(): Observable<any> {
    return this.http.get(this.baseUrl + '/usuarios');
  }

  verificarUsuario(usuario: UsuarioLoginModel): Observable<UsuarioLoginModel> {
    return this.http.post( this.baseUrl + '/usuarios/verificar-usuario', usuario)
      .map(res => usuario)
      .catch((error: object) => throwError(error));
  }

}
