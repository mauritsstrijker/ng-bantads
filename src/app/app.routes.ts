import { Routes } from '@angular/router';
import { AutoCadastroComponent } from './components/auto-cadastro/auto-cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { TelaInicialClienteComponent } from './components/tela-inicial-cliente';
import { ConsultaExtratoComponent } from './components/consulta-extrato/consulta-extrato.component';
import { AlteracaoPerfilComponent } from './components/alteracao-perfil/alteracao-perfil.component';
import { Component } from '@angular/core';


export const routes: Routes = [
  { path: 'autocadastro', component: AutoCadastroComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'inicio-cliente', component: TelaInicialClienteComponent, pathMatch: 'full'},
  { path: 'extrato', component: ConsultaExtratoComponent, pathMatch: 'full' },
  { path: 'alteracao-perfil', component: AlteracaoPerfilComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
