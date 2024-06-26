import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  private baseUrl = 'http://localhost:8080/pacientes';

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, this.getHttpOptions());
  }

  getPaciente(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, this.getHttpOptions());
  }

  adicionarPaciente(paciente: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, paciente, this.getHttpOptions());
  }

  atualizarPaciente(id: number, paciente: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, paciente, this.getHttpOptions());
  }

  excluirPaciente(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, this.getHttpOptions());
  }

  private getHttpOptions() {
    const token = localStorage.getItem('token'); // Pegar token do localStorage
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
  }
}







