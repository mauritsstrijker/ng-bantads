import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GerenteService {
  http = inject(HttpClient);

  //TODO - Atualizar depois url
  apiUrl = 'http://localhost:seilaaporta/gerentes';

  constructor() {}

  buscarTelaInicial() {
    return this.http.get<any>(this.apiUrl + '/inicio');
  }

  buscarTodos() {
    return this.http.get<any[]>(this.apiUrl);
  }

  buscarTop3Clientes() {
    return this.http.get<any[]>(this.apiUrl + '/clientes/top3');
  }

  consultarCliente(clienteId: string) {
    return this.http.get<any[]>(this.apiUrl + `/clientes/${clienteId}`);
  }

  aprovarCliente(clienteId: string) {
    return this.http.post<any[]>(
      this.apiUrl + `/clientes/aprovar/${clienteId}`,
      null
    );
  }

  rejeitarCliente(clienteId: string) {
    //TODO - Body possui motivo, criar model
    // {
    //   "motivo": "Exemplo motivo"
    // }
    return this.http.post<any[]>(
      this.apiUrl + `/clientes/rejeitar/${clienteId}`,
      null
    );
  }
}
