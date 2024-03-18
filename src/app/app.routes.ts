import { Routes } from '@angular/router';
import { AutoCadastroComponent } from './components/auto-cadastro/auto-cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { DepositoComponent } from './components/deposito/deposito.component';
import { SaqueComponent } from './components/saque/saque.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { TelaInicialClienteComponent } from './components/tela-inicial-cliente';
import { ConsultaExtratoComponent } from './components/consulta-extrato/consulta-extrato.component';
import { AlteracaoPerfilComponent } from './components/alteracao-perfil/alteracao-perfil.component';
import { ConsultaTodosClientesComponent } from './components/consulta-todos-clientes/consulta-todos-clientes.component';
import { Component } from '@angular/core';
import { TelaInicialGerenteComponent } from './components/tela-inicial-gerente/tela-inicial-gerente.component';
import { TelaInicialAdministradorComponent } from './components/tela-inicial-administrador/tela-inicial-administrador.component';

export const routes: Routes = [
  { path: 'autocadastro', component: AutoCadastroComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'deposito', component: DepositoComponent, pathMatch: 'full' },
  { path: 'saque', component: SaqueComponent, pathMatch: 'full' },
  {
    path: 'transferencia',
    component: TransferenciaComponent,
    pathMatch: 'full',
  },
  {
    path: 'inicio-cliente',
    component: TelaInicialClienteComponent,
    pathMatch: 'full',
  },
  {
    path: 'inicio-gerente',
    component: TelaInicialGerenteComponent,
    pathMatch: 'full',
  },
  {
    path: 'inicio-administrador',
    component: TelaInicialAdministradorComponent,
    pathMatch: 'full',
  },
  { path: 'extrato', component: ConsultaExtratoComponent, pathMatch: 'full' },
  {
    path: 'alteracao-perfil',
    component: AlteracaoPerfilComponent,
    pathMatch: 'full',
  },
  { path: 'consulta-todos-clientes', component: ConsultaTodosClientesComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
