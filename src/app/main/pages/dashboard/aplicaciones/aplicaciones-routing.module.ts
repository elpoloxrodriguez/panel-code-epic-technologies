import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '@core/services/seguridad/auth-guard.guard';
import { EventosComponent } from './eventos/eventos.component';
import { InstalarComponent } from './instalar/instalar.component';
import { MenuComponent } from './menu/menu.component';
import { MonitoreoComponent } from './monitoreo/monitoreo.component';

const routes: Routes = [
  {
    path: 'aplicaciones/instalar_app',
    component: InstalarComponent,
    canActivate:[AuthGuardGuard],
    data: { animation: 'instalar' }
  },
  {
    path: 'aplicaciones/definir_menu',
    component: MenuComponent,
    canActivate:[AuthGuardGuard],
    data: { animation: 'menu' }
  },
  {
    path: 'aplicaciones/monitoreo',
    component: MonitoreoComponent,
    canActivate:[AuthGuardGuard],
    data: { animation: 'monitoreo' }
  },
  {
    path: 'aplicaciones/eventos',
    component: EventosComponent,
    canActivate:[AuthGuardGuard],
    data: { animation: 'eventos' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicacionesRoutingModule { }
