import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CoreCommonModule } from '@core/common.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';


import { menu } from 'app/menu/menu';
import { ContentHeaderComponent } from 'app/layout/components/content-header/content-header.component';
import { HomeComponent } from './home/home.component';
import { CoreMenuService } from '@core/components/core-menu/core-menu.service';
import { LoginService } from '@core/services/seguridad/login.service';
import { RedesComponent } from './redes/redes.component';
import { CoreTranslationService } from '@core/services/translation.service';

import { locale as en } from 'app/menu/i18n/en';
import { locale as fr } from 'app/menu/i18n/fr';
import { locale as de } from 'app/menu/i18n/de';
import { locale as pt } from 'app/menu/i18n/pt';
import { HerramientasComponent } from './herramientas/herramientas.component';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { AplicacionesComponent } from './aplicaciones/aplicaciones.component';
import { ComunicacionesComponent } from './redes/comunicaciones/comunicaciones.component';

@NgModule({
  declarations: [
    RedesComponent,
    HerramientasComponent,
    SeguridadComponent,
    AplicacionesComponent,
    ComunicacionesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ContentHeaderModule,
    CommonModule,
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
  public contentHeader: object

  public menu: any

  public coreConfig: any;

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  constructor(
    private _coreMenuService: CoreMenuService,
    private loginService: LoginService,
    private _coreTranslationService: CoreTranslationService,
    private _translateService: TranslateService,

  ) {

    this.cargarMenu()

  }



  async cargarMenu() {
    try {

      const App = await this.loginService.Iniciar().then()

      this.menu = App.Rol.Menu == undefined ? menu : this.loginService.obtenerMenu()
      console.log(this.menu);
      console.info(menu)
      this._coreMenuService.register('main', this.menu);
      // Set the main menu as our current menu
      this._coreMenuService.setCurrentMenu('main');

      // Add languages to the translation service
      this._translateService.addLangs(['en', 'es', 'fr', 'de', 'pt']);

      // This language will be used as a fallback when a translation isn't found in the current language
      this._translateService.setDefaultLang('en');

      // Set the translations for the menu
      this._coreTranslationService.translate(en, fr, de, pt);

    } catch (error) {
      console.error('Error cargando aplicaciones', error);
    }





    // // Set the application page title
    // this._title.setTitle(this.coreConfig.app.appTitle);

  }


}



