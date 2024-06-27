import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  private baseUrl = 'http://localhost:8080/consultas';

  constructor(private http: HttpClient) {}

  getConsultaPorId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, this.getHttpOptions());
  }
  
  getConsultas(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, this.getHttpOptions());
  }

  agendarConsulta(consulta: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, consulta, this.getHttpOptions());
  }

  excluirConsulta(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, this.getHttpOptions());
  }

  private getHttpOptions() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
  }
}





