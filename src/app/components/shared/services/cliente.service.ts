import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  http = inject(HttpClient);

  //TODO - Atualizar depois url
  apiUrl = 'http://localhost:seilaaporta/clientes/';

  constructor() {}

  //CONSULTAR DOCUMENTACAO API REST (AQUELE EXCELZIN) PARA OBTER OS MODELOS DE REQUEST E RESPONSE (jsons blablaba)

  buscarTelaInicial() {
    return this.http.get<any>(this.apiUrl + '/inicio');
  }

  alterarPerfil() {
    // Acho que é uma saga aqui, precisar especificar URL do serviço de SAGA's
    // TODO - Model do body de update do perfil, esta passando nulo por enquanto
    return this.http.put<any>(this.apiUrl + 'perfil', null);
  }

  depositar() {
    // TODO - Model com propriedade chamada valor
    return this.http.post<any>(this.apiUrl + 'deposito', null);
  }

  buscarTodos() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
