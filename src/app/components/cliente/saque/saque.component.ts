import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-saque',
  standalone: true,
  imports: [
    InputNumberModule,
    ButtonModule,
    CardModule,
    DialogModule,
    FormsModule,
    CurrencyPipe,
    InputTextModule,
  ],
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.scss'],
})
export class SaqueComponent {
  visible = false;
  saldoDisponivel: number = 15605.0;
  valorSaque: number | undefined;
  valorRestante: number | undefined;

  constructor() {}

  abrirConfirmacaoSaque() {
    if (this.valorSaque !== undefined && this.valorSaque > 0) {
      this.valorRestante = this.saldoDisponivel - this.valorSaque;
      this.visible = true;
    } else {
      console.error('O valor do saque não é válido.');
    }
  }

  confirmarSaque() {
    if (this.valorSaque !== undefined && this.valorSaque > 0) {
      console.log(`Sacando R$ ${this.valorSaque.toFixed(2)}`);
      this.saldoDisponivel -= this.valorSaque;
      this.valorSaque = undefined;
      this.visible = false;
    } else {
      console.error('O valor do saque não é válido.');
    }
  }
}
