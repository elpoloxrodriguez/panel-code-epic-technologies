import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

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

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

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

  irA(base: string, ruta: string) {
    this.ruta.navigate([base, ruta])
  }

  modalOpenXL(modalXL) {
    this.modalService.open(modalXL, {
      centered: true,
      size: 'xl'
    });
  }
  
}
