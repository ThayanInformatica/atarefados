import { UsuarioModel } from './../shared/models/Usuario.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  listarUsuarios(): Observable<UsuarioModel>{
    return this.http.get<UsuarioModel>(`${this.baseUrl}/usuarios`);
  }
}
