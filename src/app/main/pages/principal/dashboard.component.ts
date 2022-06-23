import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  /**
   *
   * @param {CoreTranslationService} _coreTranslationService
   */
  constructor(
    private modalService: NgbModal,
    private ruta: Router
  ) {
  }

  public contentHeader: object
  // Public
  closeResult: string = ''

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  
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
    // console.log(item)
    this.modalService.open(content, {
      centered: true,
      size: 'lg',
      ariaLabelledBy: 'modal-basic-title'
    }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
      // var api = item.entorno == "produccion" ? "/v1/" : "/devel/"
      // this.xentorno = api + "api/crud:" + item.id;
      // this.data = item
      // if (item.entradas != undefined) {
        //   this.codeTypeJs = this.apiService.GenerarCodigo(item.entradas, item.funcion, this.xentorno)
        //   this.clickRefresh(0)
        // }
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
      }

      
    }
    