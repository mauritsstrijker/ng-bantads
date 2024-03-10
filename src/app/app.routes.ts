import { Routes } from '@angular/router';
import { AutoCadastroComponent } from './components/auto-cadastro/auto-cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { TelaInicialClienteComponent } from './components/tela-inicial-cliente';

export const routes: Routes = [
  { path: 'autocadastro', component: AutoCadastroComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'inicio-cliente', component: TelaInicialClienteComponent, pathMatch: 'full'},

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
