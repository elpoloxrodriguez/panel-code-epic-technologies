import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '@core/services/seguridad/auth-guard.guard';
import { PerfilComponent } from './perfil/perfil.component';
import { RolComponent } from './rol/rol.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path: 'seguridad/roles',
    component: RolComponent,
    canActivate:[AuthGuardGuard],
    data: { animation: 'rol' }
  },
  {
    path: 'seguridad/perfiles',
    component: PerfilComponent,
    canActivate:[AuthGuardGuard],
    data: { animation: 'perfil' }
  },
  {
    path: 'seguridad/usuarios',
    component: UsuarioComponent,
    canActivate:[AuthGuardGuard],
    data: { animation: 'usuario' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
