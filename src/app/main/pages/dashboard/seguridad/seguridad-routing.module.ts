import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { RolComponent } from './rol/rol.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path: 'seguridad/roles',
    component: RolComponent,
    data: { animation: 'rol' }
  },
  {
    path: 'seguridad/perfiles',
    component: PerfilComponent,
    data: { animation: 'perfil' }
  },
  {
    path: 'seguridad/usuarios',
    component: UsuarioComponent,
    data: { animation: 'usuario' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
