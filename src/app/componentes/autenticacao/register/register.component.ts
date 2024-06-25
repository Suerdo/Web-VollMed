import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AutenticacaoService } from '../../../services/autenticacao.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class RegisterComponent {
  constructor(private authService: AutenticacaoService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const dadosCadastro = {
        nome: form.value.name,
        login: form.value.email,
        senha: form.value.password
      };
      console.log('Dados de cadastro enviados:', dadosCadastro); // Adicione este log
      this.authService.cadastrarUsuario(dadosCadastro).subscribe({
        next: (response) => {
          console.log('Cadastro bem-sucedido', response);
          this.router.navigate(['/home']); // Redirecionar para a home após cadastro bem-sucedido
        },
        error: (error) => {
          console.error('Erro ao efetuar cadastro', error);
          const errorMessage = error.error?.message || 'Erro desconhecido ao cadastrar';
          alert('Cadastro falhou: ' + errorMessage);
        }
      });
    }
  }
}














