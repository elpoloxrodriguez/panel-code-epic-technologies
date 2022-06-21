import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { FuncionesComponent } from './funciones/funciones.component';
import { GraphqlComponent } from './graphql/graphql.component';
import { WorkflowComponent } from './workflow/workflow.component';

const routes: Routes = [
  {
    path: 'herramienta/funciones',
    component: FuncionesComponent,
    data: { animation: 'funciones' }
  },
  {
    path: 'herramienta/api',
    component: ApiComponent,
    data: { animation: 'api' }
  },
  {
    path: 'herramienta/graphql',
    component: GraphqlComponent,
    data: { animation: 'graphql' }
  },
  {
    path: 'herramienta/workflow',
    component: WorkflowComponent,
    data: { animation: 'workflow' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HerramientasRoutingModule { }
