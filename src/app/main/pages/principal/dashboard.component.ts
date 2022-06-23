import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { menu } from 'app/menu/menu';
import { CoreMenuService } from '@core/components/core-menu/core-menu.service';
import { LoginService } from '@core/services/seguridad/login.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public menu: any

  /**
   * 
   * @param modalService 
   * @param ruta 
   * @param _coreMenuService 
   * @param loginService 
   */
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private ruta: Router,
    private _coreMenuService: CoreMenuService,
    private loginService: LoginService) {
    config.backdrop = false;
    config.keyboard = false;
  }

  public contentHeader: object


  closeResult: string = ''


  irA(base: string, ruta: string) {
    this.ruta.navigate([base, ruta])
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  activarFormulario(content) {
    this.modalService.open(content, {
      centered: true
    }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  /**
   * On init
   */
  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Dashboard',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Inicio',
            isLink: true,
            link: '/'
          },
          {
            name: 'Principal',
            isLink: false
          }
        ]
      }
    }
    this.cargarMenu()

  }

  async cargarMenu() {
    try {
      const App = await this.loginService.Iniciar().then()
      this.menu = App.Rol.Menu == undefined ? menu : this.loginService.obtenerMenu()
      this._coreMenuService.register('main', this.menu);
      this._coreMenuService.setCurrentMenu('main');
    } catch (error) {
      console.error('Error cargando menu');
    }

  }


}
