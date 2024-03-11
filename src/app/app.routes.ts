import { Routes } from '@angular/router';
import { AutoCadastroComponent } from './components/auto-cadastro/auto-cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { ConsultaExtratoComponent } from './components/consulta-extrato/consulta-extrato.component';

export const routes: Routes = [
  { path: 'autocadastro', component: AutoCadastroComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'extrato', component: ConsultaExtratoComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
