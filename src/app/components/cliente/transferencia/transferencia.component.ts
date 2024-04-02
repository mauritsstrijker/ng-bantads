import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-transferencia',
  standalone: true,
  imports: [
    InputNumberModule,
    ButtonModule,
    CardModule,
    InputMaskModule,
    DialogModule,
  ],
  templateUrl: './transferencia.component.html',
  styleUrl: './transferencia.component.scss',
})
export class TransferenciaComponent {
  visible = false;
  valorTransferencia: unknown;

  constructor() {}

  abrirConfirmacao() {
    const inputElement = document.getElementById(
      'currency'
    ) as HTMLInputElement;
    if (inputElement) {
      this.valorTransferencia = inputElement.value as unknown;
    }
    this.visible = true;
  }

  transferir() {
    this.visible = false;
  }
}
