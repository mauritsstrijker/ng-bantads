import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputMaskModule } from 'primeng/inputmask';
import { GerenteService } from '../../shared/services/gerente.service';

@Component({
  selector: 'app-consulta-todos-clientes',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    CommonModule,
    ButtonModule,
    DialogModule,
    InputMaskModule,
  ],
  templateUrl: './consulta-todos-clientes.component.html',
  styleUrl: './consulta-todos-clientes.component.scss',
})
export class ConsultaTodosClientesComponent implements OnInit {
  gerenteService = inject(GerenteService);

  ngOnInit(): void {
    this.gerenteService.buscarTodosClientes().subscribe({
      next: (response) => {
        this.clientes = response;
      },
    });
  }
  showDialog(cliente: any) {
    this.selectedCliente = cliente;
    this.visible = true;
  }

  filterClientes(event: any) {
    const filterValue = event.target.value.toLowerCase();
    this.clientesView = this.clientes.filter((cliente) =>
      cliente.name.toLowerCase().includes(filterValue)
    );
  }

  visible: boolean = false;
  selectedCliente: any;

  clientes: any[] = [];

  clientesView: any[] = [];
}
