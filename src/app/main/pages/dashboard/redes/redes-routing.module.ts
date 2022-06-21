import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '@core/services/seguridad/auth-guard.guard';
import { ComunicacionesComponent } from './comunicaciones/comunicaciones.component';
import { ConexionesComponent } from './conexiones/conexiones.component';
import { MonitoreoComponent } from './monitoreo/monitoreo.component';

const routes: Routes = [
  {
    path: 'redes/comunicaciones',
    component: ComunicacionesComponent,
    canActivate:[AuthGuardGuard],
    data: { animation: 'redes' }
  },
  {
    path: 'redes/conexiones',
    component: ConexionesComponent,
    canActivate:[AuthGuardGuard],
    data: { animation: 'conexiones' }
  },
  {
    path: 'redes/monitoreo',
    component: MonitoreoComponent,
    canActivate:[AuthGuardGuard],
    data: { animation: 'monitoreo' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedesRoutingModule { }
