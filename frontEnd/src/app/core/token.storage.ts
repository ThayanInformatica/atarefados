import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USUARIO_LOGADO = 'usuarioLogado';

@Injectable()
export class TokenStorage {

  constructor() { }

  public signOut() {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(USUARIO_LOGADO);
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,  token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  salvarUsuario(usuario) {
    window.sessionStorage.setItem(USUARIO_LOGADO, JSON.stringify(usuario));
  }

  getUsuarioLogado() {
    const usuarioAuthLogado = window.sessionStorage.getItem(USUARIO_LOGADO);
    return JSON.parse(usuarioAuthLogado);
  }

}
