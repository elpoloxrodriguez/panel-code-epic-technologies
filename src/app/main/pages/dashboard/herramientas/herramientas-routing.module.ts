import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '@core/services/seguridad/auth-guard.guard';
import { ApiComponent } from './api/api.component';
import { FuncionesComponent } from './funciones/funciones.component';
import { GraphqlComponent } from './graphql/graphql.component';
import { WorkflowComponent } from './workflow/workflow.component';

const routes: Routes = [
  {
    path: 'herramienta/funciones',
    component: FuncionesComponent,
    canActivate:[AuthGuardGuard],
    data: { animation: 'funciones' }
  },
  {
    path: 'herramienta/api',
    component: ApiComponent,
    canActivate:[AuthGuardGuard],
    data: { animation: 'api' }
  },
  {
    path: 'herramienta/graphql',
    component: GraphqlComponent,
    canActivate:[AuthGuardGuard],
    data: { animation: 'graphql' }
  },
  {
    path: 'herramienta/workflow',
    component: WorkflowComponent,
    canActivate:[AuthGuardGuard],
    data: { animation: 'workflow' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HerramientasRoutingModule { }
