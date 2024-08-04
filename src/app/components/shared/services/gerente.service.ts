import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GerenteService {
  http = inject(HttpClient);

  //TODO - Atualizar depois url
  apiUrl = 'http://localhost:3000/';

  constructor() {}

  buscarTelaInicial() {
    return this.http.get<any>(this.apiUrl + 'gerentes/inicio');
  }

  buscarTodos() {
    return this.http.get<any[]>(this.apiUrl);
  }

  buscarTop3Clientes() {
    return this.http.get<any[]>(this.apiUrl + 'clientes/top3');
  }

  consultarCliente(cpf: string) {
    return this.http.get<any>(this.apiUrl + `gerentes/clientes/${cpf}`);
  }

  aprovarCliente(clienteId: string) {
    return this.http.put<any[]>(
      this.apiUrl + `gerentes/clientes/aprovar/${clienteId}`,
      null
    );
  }

  rejeitarCliente(clienteId: string) {
    //TODO - Body possui motivo, criar model
    // {
    //   "motivo": "Exemplo motivo"
    // }
    return this.http.put<any[]>(
      this.apiUrl + `gerentes/clientes/rejeitar/${clienteId}`,
      null
    );
  }
}
