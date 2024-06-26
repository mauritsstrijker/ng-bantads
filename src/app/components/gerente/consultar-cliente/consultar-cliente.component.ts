import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { Dialog, DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-consultar-cliente',
  standalone: true,
  imports: [
    InputNumberModule,
    ButtonModule,
    CardModule,
    InputMaskModule,
    DialogModule,
  ],
  templateUrl: './consultar-cliente.component.html',
  styleUrl: './consultar-cliente.component.scss',
})
export class ConsultarClienteComponent {
  showDialog(cliente: any) {
    this.selectedCliente = cliente;
    this.visible = true;
  }
  visible: boolean = false;
  selectedCliente: any;

  clientes: any[] = [
    {
      cpf: '123.456.789-00',
      nome: 'Christopher Picolotto Rodrigues',
      cidade: 'São Paulo',
      estado: 'SP',
      saldo: 1000.0,
    },
    {
      cpf: '987.654.321-00',
      nome: 'Leonardo Eugênio Panceri de Araujo',
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      saldo: 1500.0,
    },
    {
      cpf: '200.461.280-00',
      nome: 'Maurits Albert Strijker',
      cidade: 'Curitiba',
      estado: 'PR',
      saldo: 2000.0,
    },
    {
      cpf: '535.995.280-63',
      nome: 'Nicolas Portela Barbosa',
      cidade: 'Belo Horizonte',
      estado: 'MG',
      saldo: 2500.0,
    },
    {
      cpf: '177.371.550-07',
      nome: 'Ricardo de Paula Gomes',
      cidade: 'Porot Alegre',
      estado: 'RS',
      saldo: 3000.0,
    },
  ];
}
