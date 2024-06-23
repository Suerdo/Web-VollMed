import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private urlLogin = 'http://localhost:8080/login'; 

  constructor(private http: HttpClient) {}

  efetuarLogin(dadosLogin: { login: string; senha: string }): Observable<any> {
    return this.http.post<any>(this.urlLogin, dadosLogin);
  }
}
