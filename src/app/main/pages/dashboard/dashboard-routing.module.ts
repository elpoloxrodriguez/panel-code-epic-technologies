import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgSelectModule } from '@ng-select/ng-select'
import { CoreCommonModule } from '@core/common.module'
import { TranslateModule } from '@ngx-translate/core'
import { RedesRoutingModule } from './redes/redes-routing.module'
import { HerramientasRoutingModule } from './herramientas/herramientas-routing.module'
import { AplicacionesRoutingModule } from './aplicaciones/aplicaciones-routing.module'
import { SeguridadRoutingModule } from './seguridad/seguridad-routing.module'
import { DashboardComponent } from '../principal/dashboard.component'

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
    data: { animation: 'home' }
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CoreCommonModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    RedesRoutingModule,
    HerramientasRoutingModule,
    AplicacionesRoutingModule,
    SeguridadRoutingModule,
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { 
  /**
   * On init
   */
   constructor() {


  }

}
