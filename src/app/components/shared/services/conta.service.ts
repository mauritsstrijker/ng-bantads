import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Endereco } from '../model/endereco.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class ContaService {
  http = inject(HttpClient);

  loginService = inject(LoginService);

  //TODO - Atualizar depois url

  constructor() {}

  buscarSaldo() {
    var contaId = this.loginService.usuarioLogado.contaId;
    return this.http.get<any>(`http://localhost:3000/saldo/${contaId}`);
  }

  depositar(command: TransacaoDTO) {
    return this.http.post<any>('http://localhost:3000/transacoes', command);
  }

  sacar(command: TransacaoDTO) {
    return this.http.post<any>('http://localhost:3000/transacoes', command);
  }

  transferir(command: TransacaoDTO) {
    return this.http.post<any>('http://localhost:3000/transacoes', command);
  }
}

export interface TransacaoDTO {
  id?: number;
  idCliente?: number;
  tipoTransacao: number;
  valorTransacao: number;
  data: string;
  destinatario?: number;
  saldo?: number;
}
