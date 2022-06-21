import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunicacionesComponent } from './comunicaciones/comunicaciones.component';
import { ConexionesComponent } from './conexiones/conexiones.component';
import { MonitoreoComponent } from './monitoreo/monitoreo.component';

const routes: Routes = [
  {
    path: 'redes/comunicaciones',
    component: ComunicacionesComponent,
    data: { animation: 'redes' }
  },
  {
    path: 'redes/conexiones',
    component: ConexionesComponent,
    data: { animation: 'conexiones' }
  },
  {
    path: 'redes/monitoreo',
    component: MonitoreoComponent,
    data: { animation: 'monitoreo' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedesRoutingModule { }
