import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
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
    DialogModule,
    FormsModule,
    CurrencyPipe,
  ],
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.scss'],
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
      console.log(`Depositando R$ ${this.valorDeposito.toFixed(2)}`);
      this.valorDeposito = undefined;
      this.visible = false;
    } else {
      console.error('O valor do depósito não é válido.');
    }
  }
}
