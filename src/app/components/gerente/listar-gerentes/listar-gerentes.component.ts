import { Component, inject, OnInit } from '@angular/core';
import { GerenteService } from '../../shared/services/gerente.service';

@Component({
  selector: 'app-listar-gerentes',
  templateUrl: './listar-gerentes.component.html',
  styleUrls: ['./listar-gerentes.component.scss'],
})
export class ListarGerentesComponent implements OnInit {
  gerenteService = inject(GerenteService);

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

  ngOnInit() {
    this.gerenteService.buscarTodos().subscribe({
      next: (response) => {
        this.gerentes = response;
      },
      error: (e) => {},
    });
  }
}
