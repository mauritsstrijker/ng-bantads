import { Component, inject } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { Button, ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import {
  ContaService,
  TransacaoDTO,
} from '../../shared/services/conta.service';
import { LoginService } from '../../shared/services/login.service';
import { InputText, InputTextModule } from 'primeng/inputtext';

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
    InputTextModule,
  ],
  templateUrl: './transferencia.component.html',
  styleUrl: './transferencia.component.scss',
})
export class TransferenciaComponent {
  visible = false;
  valorTransferencia: number | undefined;
  destino: number;

  contaService = inject(ContaService);
  loginService = inject(LoginService);

  constructor() {}

  abrirConfirmacao() {
    this.visible = true;
  }

  transferir() {
    if (this.valorTransferencia !== undefined && this.valorTransferencia > 0) {
      console.log(`Transferindo R$ ${this.valorTransferencia}`);
      var command: TransacaoDTO = {
        idCliente: parseFloat(this.loginService.usuarioLogado.clienteId),
        tipoTransacao: 3,
        valorTransacao: this.valorTransferencia,
        data: new Date().toISOString(),
        destinatario: this.destino,
      };
      this.contaService.transferir(command).subscribe({
        next: () => {},
      });
      this.valorTransferencia = undefined;
      this.visible = false;
    } else {
      console.error('O valor da transferência não é válido.');
    }
  }
}
