import {Injectable} from '@angular/core';
import {TokenStorage} from './token.storage';
import {Router} from '@angular/router';

@Injectable()
export class UsuarioLogado {

  private button = true;

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

  public verificaSeTokenExiste(){
    if (this.token.getToken() != null){
      return this.button;
    } else {
      this.button = false
      return this.button;
    }
  }

}
