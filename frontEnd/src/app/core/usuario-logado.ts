import {Injectable} from '@angular/core';
import {TokenStorage} from './token.storage';
import {Router} from '@angular/router';

@Injectable()
export class UsuarioLogado {

  constructor(private token: TokenStorage, private router: Router) {
  }

  public verificarUsuarioLogado() {
    if (this.token.getToken() != null) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['login']);
    }
  }

  public logout(): void {
    this.token.signOut();
    this.router.navigate(['login']);
  }
}
