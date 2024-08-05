import { Component, ViewChild } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { ActivatedRoute, Router } from '@angular/router';
import { Login, Perfil } from '../../shared/model';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../shared/services/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CheckboxModule, CommonModule, DropdownModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @ViewChild('formLogin') formLogin: NgForm;
  public login = new Login();
  loading: boolean = false;
  message!: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (this.loginService.usuarioLogado) {
      this.redirecionaUsuarioLogado();
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.message = params['error'];
    });
  }

  logar(): void {
    this.loading = true;
    console.log(this.login);
    if (this.formLogin.form.valid) {
      this.loginService.login(this.login).subscribe({
        next: (usu) => {
          console.log(usu);
          if (usu != null) {
            this.loginService.setToken(usu.token);
            this.loading = false;
            this.redirecionaUsuarioLogado();
          } else {
            this.message = 'Usuário/Senha inválidos.';
          }
        },
        error: (e) => {
          console.log(e);
          var usu = e.error.text;
          if (usu != null) {
            this.loginService.setToken(usu.token);
            this.loading = false;
            this.redirecionaUsuarioLogado();
          } else {
            this.message = 'Usuário/Senha inválidos.';
          }
        },
      });
    }
    this.loading = false;
  }

  redirecionaUsuarioLogado() {
    if (this.loginService.usuarioLogado.perfil === Perfil.CLIENTE)
      this.router.navigate(['/inicio-cliente']);
    else if (this.loginService.usuarioLogado.perfil === Perfil.GERENTE) {
      this.router.navigate(['inicio-gerente']);
    } else if (this.loginService.usuarioLogado.perfil === Perfil.ADMIN) {
      this.router.navigate(['inicio-administrador']);
    }
  }
}
