import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RelatorioService } from '../../shared/services/relatorio.service';

@Component({
  selector: 'app-relatorio-de-clientes',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './relatorio-de-clientes.component.html',
  styleUrl: './relatorio-de-clientes.component.scss',
})
export class RelatorioDeClientesComponent {
  @ViewChild('content', { static: false }) el!: ElementRef;

  constructor(private readonly relatorioService: RelatorioService) {}

  clientes: any[] = [
    {
      nome: 'Christopher Picolotto Rodrigues',
      cpf: '123.456.789-00',
      limite: 2000,
      gerente: 'Carlos Andrade',
      saldo: 1000.0,
    },
    {
      nome: 'Leonardo Eugênio Panceri de Araujo',
      cpf: '987.654.321-00',
      limite: 3000,
      gerente: 'Roberto Cunha',
      saldo: 1500.0,
    },
    {
      nome: 'Maurits Albert Strijker',
      cpf: '200.461.280-00',
      limite: 2500,
      gerente: 'Germano Meyer',
      saldo: 2000.0,
    },
    {
      nome: 'Nicolas Portela Barbosa',
      cpf: '535.995.280-63',
      limite: 2800,
      gerente: 'Carlos Andrade',
      saldo: 2500.0,
    },
    {
      nome: 'Ricardo de Paula Gomes',
      cpf: '177.371.550-07',
      limite: 4000,
      gerente: 'Germano Meyer',
      saldo: 3000.0,
    },
  ];

  gerarRelatorioClientes() {
    const headers = ['cpf', 'nome', 'limite', 'gerente', 'saldo'];
    const data = [
      [
        'Christopher Picolotto Rodrigues',
        '123.456.789-00',
        '2000',
        'Carlos Andrade',
        '1000.0',
      ],
      [
        'Leonardo Eugênio Panceri de Araujo',
        '987.654.321-00',
        '3000',
        'Roberto Cunha',
        '1500.0',
      ],
      [
        'Maurits Albert Strijker',
        '200.461.280-00',
        '2500',
        'Germano Meyer',
        '2000.0',
      ],
      [
        'Nicolas Portela Barbosa',
        '535.995.280-63',
        '2800',
        'Carlos Andrade',
        '2500.0',
      ],
      [
        'Ricardo de Paula Gomes',
        '177.371.550-07',
        '4000',
        'Germano Meyer',
        '3000.0',
      ],
    ];
    this.relatorioService.gerarPDF(headers, data);
  }
}
