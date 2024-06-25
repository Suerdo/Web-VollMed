import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  private baseUrl = 'http://localhost:8080/medicos';

  constructor(private http: HttpClient) { }

  getMedicos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, this.getHttpOptions());
  }

  getMedico(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, this.getHttpOptions());
  }

  adicionarMedico(medico: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, medico, this.getHttpOptions());
  }

  atualizarMedico(id: number, medico: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, medico, this.getHttpOptions());
  }

  excluirMedico(id: number): Observable<any> {
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


