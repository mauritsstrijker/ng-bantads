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
import { TelaInicialGerenteComponent } from './components/gerente/tela-inicial-gerente/tela-inicial-gerente.component';
import { TelaInicialAdministradorComponent } from './components/admin/tela-inicial-administrador/tela-inicial-administrador.component';
import { ConsultarClienteComponent } from './components/gerente/consultar-cliente/consultar-cliente.component';
import { ConsultarMelhoresClientesComponent } from './components/gerente/consultar-melhores-clientes/consultar-melhores-clientes.component';
import { RelatorioDeClientesComponent } from './components/admin/relatorio-de-clientes/relatorio-de-clientes.component';
import { AreaGerenciaComponent } from './components/admin/area-gerencia/area-gerencia.component';
import { authGuard } from './components/authguard/auth.guard';
import { Perfil } from './components/shared/model';
import { InserirGerenteComponent } from './components/gerente/insercao-gerente/insercao-gerente.component';
import { RemoverGerenteComponent } from './components/gerente/remocao-gerente/remocao-gerente.component';
import { ListarGerentesComponent } from './components/gerente/listar-gerentes/listar-gerentes.component';
import { AlterarGerenteComponent } from './components/gerente/alterar-gerente/alterar-gerente.component';

export const routes: Routes = [
  {
    path: 'autocadastro',
    component: AutoCadastroComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'inicio-cliente',
    component: TelaInicialClienteComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
    data: {
      role: [Perfil.CLIENTE],
    },
  },
  {
    path: 'alteracao-perfil',
    component: AlteracaoPerfilComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
    data: {
      role: [Perfil.CLIENTE],
    },
  },
  {
    path: 'deposito',
    component: DepositoComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
    data: {
      role: [Perfil.CLIENTE],
    },
  },
  {
    path: 'saque',
    component: SaqueComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
    data: {
      role: [Perfil.CLIENTE],
    },
  },
  {
    path: 'transferencia',
    component: TransferenciaComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
    data: {
      role: [Perfil.CLIENTE],
    },
  },
  {
    path: 'extrato',
    component: ConsultaExtratoComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
    data: {
      role: [Perfil.CLIENTE],
    },
  },
  {
    path: 'inicio-gerente',
    component: TelaInicialGerenteComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
    data: {
      role: [Perfil.GERENTE],
    },
  },
  {
    path: 'consulta-todos-clientes',
    component: ConsultaTodosClientesComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
    data: {
      role: [Perfil.GERENTE],
    },
  },
  {
    path: 'consulta-cliente',
    component: ConsultarClienteComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
    data: {
      role: [Perfil.GERENTE],
    },
  },
  {
    path: 'consulta-melhores-clientes',
    component: ConsultarMelhoresClientesComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
    data: {
      role: [Perfil.GERENTE],
    },
  },
  {
    path: 'insercao-gerente',
    component: InserirGerenteComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
    data: {
      role: [Perfil.GERENTE],
    },
  },
  {
    path: 'remocao-gerente',
    component: RemoverGerenteComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
    data: {
      role: [Perfil.GERENTE],
    },
  },
  {
    path: 'listar-gerentes',
    component: ListarGerentesComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
    data: {
      role: [Perfil.GERENTE],
    },
  },
  {
    path: 'alterar-gerente',
    component: AlterarGerenteComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
    data: {
      role: [Perfil.GERENTE],
    },
  },
  {
    path: 'inicio-administrador',
    component: TelaInicialAdministradorComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
    data: {
      role: [Perfil.ADMIN],
    },
  },
  {
    path: 'relatorio-de-clientes',
    component: RelatorioDeClientesComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
    data: {
      role: [Perfil.ADMIN],
    },
  },
  {
    path: 'areagerencia',
    component: AreaGerenciaComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
    data: {
      role: [Perfil.ADMIN],
    },
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
