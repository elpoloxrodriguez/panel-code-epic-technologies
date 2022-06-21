import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { InstalarComponent } from './instalar/instalar.component';
import { MenuComponent } from './menu/menu.component';
import { MonitoreoComponent } from './monitoreo/monitoreo.component';

const routes: Routes = [
  {
    path: 'aplicaciones/instalar_app',
    component: InstalarComponent,
    data: { animation: 'instalar' }
  },
  {
    path: 'aplicaciones/definir_menu',
    component: MenuComponent,
    data: { animation: 'menu' }
  },
  {
    path: 'aplicaciones/monitoreo',
    component: MonitoreoComponent,
    data: { animation: 'monitoreo' }
  },
  {
    path: 'aplicaciones/eventos',
    component: EventosComponent,
    data: { animation: 'eventos' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicacionesRoutingModule { }
