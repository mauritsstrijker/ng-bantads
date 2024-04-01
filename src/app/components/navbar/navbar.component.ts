import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [InputTextModule, ButtonModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  public mostrarCliente: boolean = true;
  public mostrarGerente: boolean = false;
  public mostrarAdmin: boolean = false;
}
