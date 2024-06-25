import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConsultasService } from '../../../services/consultas.service';

@Component({
  standalone: true,
  selector: 'app-listar-consultas',
  templateUrl: './listar-consultas.component.html',
  styleUrls: ['./listar-consultas.component.css'],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class ListarConsultasComponent implements OnInit {
  consultas: any[] = [];

  constructor(private consultasService: ConsultasService) {}

  ngOnInit(): void {
    this.consultasService.getConsultas().subscribe({
      next: (data) => {
        this.consultas = data.content;
      },
      error: (error) => {
        console.error('Erro ao carregar consultas', error);
      }
    });
  }

  excluirConsulta(id: number): void {
    if (confirm('Tem certeza de que deseja excluir esta consulta?')) {
      this.consultasService.excluirConsulta(id).subscribe({
        next: () => {
          this.consultas = this.consultas.filter(consulta => consulta.id !== id);
        },
        error: (error) => {
          console.error('Erro ao excluir consulta', error);
        }
      });
    }
  }
}












