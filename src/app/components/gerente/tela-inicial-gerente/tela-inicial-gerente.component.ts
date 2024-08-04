import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { TableModule } from 'primeng/table';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { InputTextModule } from 'primeng/inputtext';
import { GerenteService } from '../../shared/services/gerente.service';

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
export class TelaInicialGerenteComponent implements OnInit {
  gerenteService = inject(GerenteService);

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.gerenteService.buscarTelaInicial().subscribe({
      next: (response) => {
        this.usuarios = response;
      },
    });
  }

  usuarios: any[] = [];

  confirmarCadastro(event: EventTarget, id: string) {
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
        this.gerenteService.aprovarCliente(id).subscribe({
          next: () => {},
        });
      },
    });
  }

  rejeitarCadastro(event: EventTarget, id: string) {
    this.confirmationService.confirm({
      key: 'rejeitar',
      target: event,
      accept: () => {
        this.messageService.add({
          severity: 'error',
          detail: 'Usuário rejeitado.',
          life: 3000,
        });
        this.gerenteService.rejeitarCliente(id).subscribe({
          next: () => {},
        });
      },
    });
  }
}
