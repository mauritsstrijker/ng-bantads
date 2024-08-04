import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GerenteDTO } from '../../admin/area-gerencia/area-gerencia.component';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class GerenteService {
  http = inject(HttpClient);

  loginService = inject(LoginService);

  //TODO - Atualizar depois url
  apiUrl = 'http://localhost:3000/';

  constructor() {}

  buscarTelaInicial() {
    return this.http.get<any>(this.apiUrl + 'gerentes/inicio');
  }

  buscarTodosClientes() {
    var gerenteId = this.loginService.usuarioLogado.gerenteId;
    return this.http.get<any>(
      `http://localhost:3000/clientes-por-gerente/${gerenteId}`
    );
  }

  buscarTodos() {
    return this.http.get<any[]>(this.apiUrl);
  }

  buscarTop3Clientes() {
    return this.http.get<any[]>(this.apiUrl + 'clientes/top3');
  }

  consultarCliente(cpf: string) {
    return this.http.get<any>(this.apiUrl + `clientes/${cpf}`);
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

  buscarTodosGerentes() {
    return this.http.get<any>('http://localhost:3000/administradores/gerentes');
  }

  cadastrarGerente(gerente: GerenteDTO) {
    return this.http.post<any>(
      'http://localhost:3000/administradores/gerentes',
      gerente
    );
  }
}
