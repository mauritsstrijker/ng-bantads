import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'alterar-gerente',
  standalone: true,
  imports: [BrowserModule, FormsModule],
  templateUrl: './alterar-gerente.component.html',
  styleUrls: ['./alterar-gerente.component.scss'],
})
export class AlterarGerenteComponent {
  gerente: any;

  ngOnInit(): void {
    this.gerente = [
      {
        nome: 'João Silva',
        cpf: '123.456.789-10',
        email: 'joao.silva@example.com',
        telefone: '(00) 12345-6789',
      },
      {
        nome: 'Maria Santos',
        cpf: '987.654.321-10',
        email: 'maria.santos@example.com',
        telefone: '(00) 98765-4321',
      },
    ];
  }

  alterarGerente(form: any): void {
    if (form.valid) {
      console.log('Gerente atualizado:', this.gerente);
    }
  }
}
