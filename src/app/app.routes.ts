import { Routes } from '@angular/router';
import { AutoCadastroComponent } from './components/cliente/auto-cadastro/auto-cadastro.component';
import { LoginComponent } from './components/cliente/login/login.component';
import { DepositoComponent } from './components/cliente/deposito/deposito.component';
import { SaqueComponent } from './components/cliente/saque/saque.component';
import { TransferenciaComponent } from './components/cliente/transferencia/transferencia.component';
import { TelaInicialClienteComponent } from './components/cliente/tela-inicial-cliente';
import { ConsultaExtratoComponent } from './components/cliente/consulta-extrato/consulta-extrato.component';
import { AlteracaoPerfilComponent } from './components/cliente/alteracao-perfil/alteracao-perfil.component';
import { ConsultaTodosClientesComponent } from './components/gerente/consulta-todos-clientes/consulta-todos-clientes.component';
import { Component } from '@angular/core';
import { TelaInicialGerenteComponent } from './components/gerente/tela-inicial-gerente/tela-inicial-gerente.component';
import { TelaInicialAdministradorComponent } from './components/admin/tela-inicial-administrador/tela-inicial-administrador.component';
import { ConsultarClienteComponent } from './components/gerente/consultar-cliente/consultar-cliente.component';
import { ConsultarMelhoresClientesComponent } from './components/gerente/consultar-melhores-clientes/consultar-melhores-clientes.component';
import { RelatorioDeClientesComponent } from './components/admin/relatorio-de-clientes/relatorio-de-clientes.component';
import { AreaGerenciaComponent } from './components/admin/area-gerencia/area-gerencia.component';

export const routes: Routes = [
  { path: 'autocadastro', component: AutoCadastroComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'deposito', component: DepositoComponent, pathMatch: 'full' },
  { path: 'areagerencia', component: AreaGerenciaComponent, pathMatch: 'full' },
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
  {
    path: 'consulta-todos-clientes',
    component: ConsultaTodosClientesComponent,
    pathMatch: 'full',
  },
  {
    path: 'consulta-cliente',
    component: ConsultarClienteComponent,
    pathMatch: 'full',
  },
  {
    path: 'consulta-melhores-clientes',
    component: ConsultarMelhoresClientesComponent,
    pathMatch: 'full',
  },
  {
    path: 'relatorio-de-clientes',
    component: RelatorioDeClientesComponent,
    pathMatch: 'full',
  },
  {
    path: 'saque',
    component: SaqueComponent,
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
