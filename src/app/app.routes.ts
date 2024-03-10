import { Routes } from '@angular/router';
import { AutoCadastroComponent } from './auto-cadastro/auto-cadastro.component';
import { TelaInicialClienteComponent } from './components/tela-inicial-cliente';

export const routes: Routes = [
  { path: '', component: AutoCadastroComponent, pathMatch: 'full' },
  { path:'inicio-cliente', component: TelaInicialClienteComponent, pathMatch: 'full'},

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
