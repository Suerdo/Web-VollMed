import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../../../services/medicos.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-medicos',
  templateUrl: './listar-medicos.component.html',
  styleUrls: ['./listar-medicos.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ListarMedicosComponent implements OnInit {
  medicos: any[] = [];

  constructor(private medicosService: MedicosService) { }

  ngOnInit(): void {
    this.medicosService.getMedicos().subscribe({
      next: (data) => {
        this.medicos = data.content;
      },
      error: (error) => {
        console.error('Erro ao carregar médicos', error);
      }
    });
  }
}



