import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr'; // For auth after login toast

import { CoreModule } from '@core/core.module';
import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule, CoreThemeCustomizerModule } from '@core/components';

import { coreConfig } from 'app/app-config';
import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { DashboardModule } from 'app/main/pages/dashboard/dashboard.module';
import { MonitoreoComponent } from './main/pages/dashboard/redes/monitoreo/monitoreo.component';
import { FuncionesComponent } from './main/pages/dashboard/herramientas/funciones/funciones.component';
import { ApiComponent } from './main/pages/dashboard/herramientas/api/api.component';
import { WorkflowComponent } from './main/pages/dashboard/herramientas/workflow/workflow.component';
import { InstalarComponent } from './main/pages/dashboard/aplicaciones/instalar/instalar.component';
import { MenuComponent } from './main/pages/dashboard/aplicaciones/menu/menu.component';
import { EventosComponent } from './main/pages/dashboard/aplicaciones/eventos/eventos.component';
import { RolComponent } from './main/pages/dashboard/seguridad/rol/rol.component';
import { PerfilComponent } from './main/pages/dashboard/seguridad/perfil/perfil.component';
import { UsuarioComponent } from './main/pages/dashboard/seguridad/usuario/usuario.component';
import { GraphqlComponent } from './main/pages/dashboard/herramientas/graphql/graphql.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule),
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./main/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
  // },
  {
    path: '**',
    redirectTo: '/miscellaneous/error' //Error 404 - Page not found
  }
];

@NgModule({
  declarations: [AppComponent, MonitoreoComponent, FuncionesComponent, ApiComponent, WorkflowComponent, InstalarComponent, MenuComponent, EventosComponent, RolComponent, PerfilComponent, UsuarioComponent, GraphqlComponent],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled', // Add options right here
      relativeLinkResolution: 'legacy',
      useHash: true
    }),
    TranslateModule.forRoot(),

    //NgBootstrap
    NgbModule,
    ToastrModule.forRoot({}),

    // Core modules
    CoreModule.forRoot(coreConfig),
    CoreCommonModule,
    CoreSidebarModule,
    CoreThemeCustomizerModule,
    
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,

    // App modules
    LayoutModule,
    DashboardModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
