import { Component, inject } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { Dialog, DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { GerenteService } from '../../shared/services/gerente.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consultar-cliente',
  standalone: true,
  imports: [
    CommonModule,
    InputNumberModule,
    ButtonModule,
    CardModule,
    InputMaskModule,
    DialogModule,
    FormsModule,
  ],
  templateUrl: './consultar-cliente.component.html',
  styleUrl: './consultar-cliente.component.scss',
})
export class ConsultarClienteComponent {
  gerenteService = inject(GerenteService);
  visible: boolean = false;
  selectedCliente: any;
  cpfDigitado: string;

  showDialog(cliente: any) {
    this.selectedCliente = cliente;
    this.visible = true;
  }

  buscarCliente() {
    this.gerenteService
      .consultarCliente(this.cpfDigitado.replace(/[^\d]/g, ''))
      .subscribe({
        next: (response) => {
          this.showDialog(response);
        },
      });
  }
}
