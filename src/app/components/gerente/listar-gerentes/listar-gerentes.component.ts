import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-gerentes',
  templateUrl: './listar-gerentes.component.html',
  styleUrls: ['./listar-gerentes.component.scss'],
})
export class ListarGerentesComponent {
  gerentes: any[] = [
    {
      nome: 'Gerente 1',
      cpf: '123.456.789-10',
      email: 'gerente1@example.com',
      telefone: '(00) 12345-6789',
    },
    {
      nome: 'Gerente 2',
      cpf: '987.654.321-10',
      email: 'gerente2@example.com',
      telefone: '(00) 98765-4321',
    },
  ];
}
