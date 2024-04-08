import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { Button, ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-transferencia',
  standalone: true,
  imports: [
    InputNumberModule,
    ButtonModule,
    CardModule,
    InputMaskModule,
    DialogModule,
    FormsModule,
    CurrencyPipe,
  ],
  templateUrl: './transferencia.component.html',
  styleUrl: './transferencia.component.scss',
})
export class TransferenciaComponent {
  visible = false;
  valorTransferencia: number | undefined;

  constructor() {}

  abrirConfirmacao() {
    this.visible = true;
  }

  transferir() {
    if (this.valorTransferencia !== undefined && this.valorTransferencia > 0) {
      console.log(`Transferindo R$ ${this.valorTransferencia.toFixed(2)}`);
      this.valorTransferencia = undefined;
      this.visible = false;
    } else {
      console.error('O valor da transferência não é válido.');
    }
  }
}
