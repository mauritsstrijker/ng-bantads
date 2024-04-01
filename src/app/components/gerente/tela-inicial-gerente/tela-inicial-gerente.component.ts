import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { TableModule } from 'primeng/table';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-tela-inicial-gerente',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    ButtonGroupModule,
    ConfirmPopupModule,
    InputTextModule,
  ],
  templateUrl: './tela-inicial-gerente.component.html',
  styleUrl: './tela-inicial-gerente.component.scss',
})
export class TelaInicialGerenteComponent {
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  usuarios: any[] = [
    { cpf: '123.456.789-00', nome: 'Fulano', salario: 2500 },
    { cpf: '987.654.321-00', nome: 'Ciclano', salario: 3000 },
    { cpf: '111.222.333-44', nome: 'Beltrano', salario: 3500 },
    { cpf: '555.666.777-88', nome: 'Maria', salario: 2800 },
    { cpf: '999.888.777-66', nome: 'João', salario: 3200 },
    { cpf: '444.333.222-11', nome: 'Ana', salario: 2900 },
    { cpf: '888.777.666-55', nome: 'Pedro', salario: 3100 },
  ];

  confirmarCadastro(event: EventTarget) {
    this.confirmationService.confirm({
      key: 'confirmar',
      target: event,
      message: 'Deseja cadastrar o usuário?',
      icon: 'pi pi-user-plus',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          detail: 'Usuário cadastrado.',
          life: 3000,
        });
      },
    });
  }

  rejeitarCadastro(event: EventTarget) {
    this.confirmationService.confirm({
      key: 'rejeitar',
      target: event,
      accept: () => {
        this.messageService.add({
          severity: 'error',
          detail: 'Usuário rejeitado.',
          life: 3000,
        });
      },
    });
  }
}
