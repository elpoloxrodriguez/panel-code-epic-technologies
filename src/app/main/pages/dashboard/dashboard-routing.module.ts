import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgSelectModule } from '@ng-select/ng-select'
import { CoreCommonModule } from '@core/common.module'
import { TranslateModule } from '@ngx-translate/core'


import { HomeComponent } from './home/home.component'
import { RedesComponent } from './redes/redes.component'


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'home' }
  },
  {
    path: 'redes',
    component: RedesComponent,
    data: { animation: 'redes' }
  },
  {
    path: '**',
    redirectTo: './main/pages/miscellaneous/error' //Error 404 - Page not found
  }

];

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
