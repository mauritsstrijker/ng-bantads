import { Routes } from '@angular/router';
import { AutoCadastroComponent } from './auto-cadastro/auto-cadastro.component';

export const routes: Routes = [
  { path: '', component: AutoCadastroComponent, pathMatch: 'full' },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
