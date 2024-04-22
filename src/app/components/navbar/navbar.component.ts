import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { LoginService } from '../shared/services/login.service';
import { Usuario } from '../shared/model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [InputTextModule, ButtonModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private router: Router, private loginService: LoginService) {}

  get usuarioLogado(): Usuario | null {
    return this.loginService.usuarioLogado;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
