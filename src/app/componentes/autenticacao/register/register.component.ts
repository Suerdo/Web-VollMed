import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Importar RouterModule

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]  // Incluir RouterModule
})
export class RegisterComponent {
  constructor() {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Formulário de cadastro válido', form.value);
      // Aqui você pode adicionar a lógica para enviar os dados do formulário ao servidor
    } else {
      console.log('Formulário de cadastro inválido');
    }
  }
}









