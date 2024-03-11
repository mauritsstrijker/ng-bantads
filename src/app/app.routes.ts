import { Routes } from '@angular/router';
import { AutoCadastroComponent } from './components/auto-cadastro/auto-cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { DepositoComponent } from './components/deposito/deposito.component';
import { SaqueComponent } from './components/saque/saque.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';

export const routes: Routes = [
  { path: 'autocadastro', component: AutoCadastroComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'deposito', component: DepositoComponent, pathMatch: 'full' },
  { path: 'saque', component: SaqueComponent, pathMatch: 'full' },
  { path: 'transferencia', component: TransferenciaComponent, pathMatch: 'full' },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
