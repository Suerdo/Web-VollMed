import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../../services/pacientes.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Adicione esta linha

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule] // Certifique-se de que o CommonModule está importado aqui
})
export class ListarPacientesComponent implements OnInit {
  pacientes: any[] = [];

  constructor(private pacientesService: PacientesService) { }

  ngOnInit(): void {
    this.pacientesService.getPacientes().subscribe(data => {
      this.pacientes = data.content;
    });
  }
}



