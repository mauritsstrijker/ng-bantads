import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RelatorioService } from '../../shared/services/relatorio.service';
import { GerenteService } from '../../shared/services/gerente.service';

@Component({
  selector: 'app-relatorio-de-clientes',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './relatorio-de-clientes.component.html',
  styleUrl: './relatorio-de-clientes.component.scss',
})
export class RelatorioDeClientesComponent implements OnInit {
  @ViewChild('content', { static: false }) el!: ElementRef;

  gerenteService = inject(GerenteService);

  constructor(private readonly relatorioService: RelatorioService) {}
  ngOnInit(): void {
    this.gerenteService.buscarRelatorioAdm().subscribe({
      next: (response) => {
        console.log(response);
        this.clientes = response.relatorio;
      },
    });
  }

  clientes: any[];

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
    console.log(this.clientes, data);
    this.relatorioService.gerarPDF(headers, this.clientes);
  }
}
