import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { Button, ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-deposito',
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
  templateUrl: './deposito.component.html',
  styleUrl: './deposito.component.scss',
})
export class DepositoComponent {
  visible = false;
  valorDeposito: number | undefined;

  constructor() {}

  abrirConfirmacao() {
    this.visible = true;
  }

  depositar() {
    if (this.valorDeposito !== undefined && this.valorDeposito > 0) {
      console.log(`Transferindo R$ ${this.valorDeposito.toFixed(2)}`);
      this.valorDeposito = undefined;
      this.visible = false;
    } else {
      console.error('O valor de depósito não é válido.');
    }
  }
}
