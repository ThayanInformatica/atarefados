import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  baseUrl: 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  attemptAuth(user: string, password: string): Observable<any> {
    const credentials = {login: user, senha: password};
    console.log('attempAuth ::');
    return this.http.post( 'http://localhost:8080/login/authentication', credentials, {responseType: 'text'});
  }

}
