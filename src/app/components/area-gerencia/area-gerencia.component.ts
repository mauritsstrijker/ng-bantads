import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-area-gerencia',
  standalone: true,
  imports: [TableModule],
  templateUrl: './area-gerencia.component.html',
  styleUrl: './area-gerencia.component.scss',
})
export class AreaGerenciaComponent {
  product = [
    {
      nome: 'João',
      cpf: '123.456.789-00',
      email: 'joao@exemplo.com',
      telefone: '(11) 98765-4321',
    },
    {
      nome: 'Jane',
      cpf: '987.654.321-00',
      email: 'jane@exemplo.com',
      telefone: '(22) 96789-0123',
    },
  ];
}
