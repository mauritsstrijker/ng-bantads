import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(
    private router: Router,
  ) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
