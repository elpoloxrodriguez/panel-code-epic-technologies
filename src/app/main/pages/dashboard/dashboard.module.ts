import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

//  Code Mirror 
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';


import { DashboardComponent } from '../principal/dashboard.component';
import { ConexionesComponent } from './redes/conexiones/conexiones.component';
import { ComunicacionesComponent } from './redes/comunicaciones/comunicaciones.component';
import { InstalarComponent } from './aplicaciones/instalar/instalar.component';
import { ApiComponent } from './herramientas/api/api.component';
import { FuncionesComponent } from './herramientas/funciones/funciones.component';
import { GraphqlComponent } from './herramientas/graphql/graphql.component';
import { WorkflowComponent } from './herramientas/workflow/workflow.component';
import { MonitoreoComponent } from './redes/monitoreo/monitoreo.component';
import { MenuComponent } from './aplicaciones/menu/menu.component';
import { EventosComponent } from './aplicaciones/eventos/eventos.component';
import { PerfilComponent } from './seguridad/perfil/perfil.component';
import { RolComponent } from './seguridad/rol/rol.component';
import { UsuarioComponent } from './seguridad/usuario/usuario.component';

@NgModule({
    declarations: [
      DashboardComponent,
      EventosComponent,
      ComunicacionesComponent,
      MenuComponent,
      InstalarComponent,
      MonitoreoComponent,
      GraphqlComponent,
      WorkflowComponent,
      ApiComponent,
      FuncionesComponent,
      ConexionesComponent,
      PerfilComponent,
      UsuarioComponent,
      RolComponent,
    ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    DashboardRoutingModule,
    CommonModule,
    CodemirrorModule,
    ContentHeaderModule,
    CoreCommonModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MiscellaneousModule
  ],
  exports: [],

})
export class DashboardModule {
 




 


}



