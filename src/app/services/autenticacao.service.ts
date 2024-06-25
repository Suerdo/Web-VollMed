import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private urlLogin = 'http://localhost:8080/autenticacao/login';
  private urlRegister = 'http://localhost:8080/autenticacao/registro'; 

  constructor(private http: HttpClient) {}

  efetuarLogin(dadosLogin: { login: string; senha: string }): Observable<any> {
    return this.http.post<any>(this.urlLogin, dadosLogin).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  cadastrarUsuario(dadosCadastro: { nome: string; login: string; senha: string }): Observable<any> {
    return this.http.post<any>(this.urlRegister, dadosCadastro).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}






