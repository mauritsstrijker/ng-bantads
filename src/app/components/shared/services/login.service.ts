import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login, Usuario } from '../model';
import { jwtDecode } from 'jwt-decode';

const LS_CHAVE: string = 'token';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  BASE_URL = 'http://localhost:5001/autenticar';

  http = inject(HttpClient);

  constructor(private httpClient: HttpClient) {}

  public get decodedToken(): any {
    const token = localStorage.getItem('token');
    return token ? jwtDecode(token) : null;
  }

  public get usuarioLogado(): Usuario | null {
    const decoded = this.decodedToken;
    if (decoded) {
      return {
        id: decoded.id,
        role: decoded.role,
      } as Usuario;
    }
    return null;
  }

  logout() {
    localStorage.removeItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  login(login: Login) {
    return this.http.post<any>(this.BASE_URL, login);
  }
}
