import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core'
import { DOCUMENT } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { locale as en } from './i18n/en'
import { locale as fr } from './i18n/fr'
import { locale as de } from './i18n/de'
import { locale as pt } from './i18n/pt'

import { menu } from 'app/menu/menu';

import { CoreMenuService } from '@core/components/core-menu/core-menu.service';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { CoreLoadingScreenService } from '@core/services/loading-screen.service';
import { CoreTranslationService } from '@core/services/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '@core/services/seguridad/login.service';
import { Subject } from 'rxjs';

import * as Waves from 'node-waves';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public contentHeader: object

  public menu: any

  public coreConfig: any;

  defaultLanguage: 'en'; // This language will be used as a fallback when a translation isn't found in the current language
  appLanguage: 'en'; // Set application default language i.e fr
  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   *
   * @param {CoreTranslationService} _coreTranslationService
   */
  constructor(private _coreTranslationService: CoreTranslationService,
    @Inject(DOCUMENT) private document: any,
    private _title: Title,
    private _renderer: Renderer2,
    private _elementRef: ElementRef,
    public _coreConfigService: CoreConfigService,
    private _coreSidebarService: CoreSidebarService,
    private _coreLoadingScreenService: CoreLoadingScreenService,
    private _coreMenuService: CoreMenuService,
    private _translateService: TranslateService,
    private loginService: LoginService
  ) {
    this._coreTranslationService.translate(en, fr, de, pt)
    console.log('HELLO DEAMON');
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    console.log('HELLO DEAMON');
   this.cargarMenu()

  }



  cargarMenu() {
    this.menu = menu

    // Register the menu to the menu service
    this._coreMenuService.register('main', this.menu);


    // Set the application page title
    this._title.setTitle(this.coreConfig.app.appTitle);

  }

  
}








// import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core'
// import { DOCUMENT } from '@angular/common';
// import { Title } from '@angular/platform-browser';

// import { locale as en } from './i18n/en'
// import { locale as fr } from './i18n/fr'
// import { locale as de } from './i18n/de'
// import { locale as pt } from './i18n/pt'

// import { menu } from 'app/menu/menu';

// import { CoreMenuService } from '@core/components/core-menu/core-menu.service';
// import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
// import { CoreConfigService } from '@core/services/config.service';
// import { CoreLoadingScreenService } from '@core/services/loading-screen.service';
// import { CoreTranslationService } from '@core/services/translation.service';
// import { TranslateService } from '@ngx-translate/core';
// import { LoginService } from '@core/services/seguridad/login.service';
// import { Subject } from 'rxjs';

// import * as Waves from 'node-waves';
// import { takeUntil } from 'rxjs/operators';


// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.scss']
// })
// export class DashboardComponent implements OnInit {
//   public contentHeader: object

//   public menu: any

//   public coreConfig: any;

//   defaultLanguage: 'en'; // This language will be used as a fallback when a translation isn't found in the current language
//   appLanguage: 'en'; // Set application default language i.e fr
//   // Private
//   private _unsubscribeAll: Subject<any>;

//   /**
//    *
//    * @param {CoreTranslationService} _coreTranslationService
//    */
//   constructor(private _coreTranslationService: CoreTranslationService,
//     @Inject(DOCUMENT) private document: any,
//     private _title: Title,
//     private _renderer: Renderer2,
//     private _elementRef: ElementRef,
//     public _coreConfigService: CoreConfigService,
//     private _coreSidebarService: CoreSidebarService,
//     private _coreLoadingScreenService: CoreLoadingScreenService,
//     private _coreMenuService: CoreMenuService,
//     private _translateService: TranslateService,
//     private loginService: LoginService
//   ) {
//     this._coreTranslationService.translate(en, fr, de, pt)
//     console.log('HELLO DEAMON');
//   }

//   // Lifecycle Hooks
//   // -----------------------------------------------------------------------------------------------------

//   /**
//    * On init
//    */
//   ngOnInit() {
   
//   }



//   cargarMenu() {
//     this.menu = menu

//     // Register the menu to the menu service
//     this._coreMenuService.register('main', this.menu);


//     // Set the application page title
//     this._title.setTitle(this.coreConfig.app.appTitle);

//   }

  
// }