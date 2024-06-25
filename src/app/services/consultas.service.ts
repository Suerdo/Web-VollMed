import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  private baseUrl = 'http://localhost:8080/consultas';

  constructor(private http: HttpClient) {}

  getConsultas(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, this.getHttpOptions());
  }

  agendarConsulta(consulta: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, consulta, this.getHttpOptions());
  }

  excluirConsulta(id: number): Observable<any> {
    console.log('Chamando excluirConsulta com ID:', id);
    return this.http.delete(`${this.baseUrl}/${id}`, this.getHttpOptions());
  }

  private getHttpOptions() {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGxhaW5AZ21haWwuY29tIiwiaXNzIjoiQVBJIFZvbGwubWVkIiwiaWQiOjIsImV4cCI6MTcxOTMyMzUzMn0.8tUksnaSky--74VwzhAOZcIAAkCF6Bu-FFQgHDuYJ7Q'; 
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
  }
}




