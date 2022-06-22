import { Component, OnInit, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

import { CoreConfigService } from '@core/services/config.service';
import { ApiService, IAPICore } from '@core/services/apicore/api.service';
import { ComunicacionesService } from '@core/services/comunicaciones/comunicaciones.service';
import { ConexionesService, IConexiones } from '@core/services/conexiones/conexiones.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-conexiones',
  templateUrl: './conexiones.component.html',
  styleUrls: ['./conexiones.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConexionesComponent implements OnInit {

  drivers = []
  hosts = []
  rowData = []
  host = '0'
  driver = '0'
  loading = false;
  identificador : string
  usuario : string
  basedatos : string
  clave : string
  puerto : string
  url : string
  descripcion : string
  estatus: boolean = false
  protocolo = '0'
  divDBng = 'none'
  divURLng = 'none'

  public xAPI : IAPICore = {
    funcion: '',
    parametros: '',
    relacional: false,
    concurrencia : false,
    protocolo: '',
    ruta : '',
    retorna : false,
    migrar : false,
    modulo : '',
    valores : {},
    coleccion : '',
    http : 0,
    https : 0,
    consumidores : '',
    puertohttp : 0,
    puertohttps : 0,
    driver : '',
    query : '',
    metodo : '',
    tipo : '',
    prioridad : '',
    entorno: '',
    logs : false
  };


  public xDri : IConexiones = {
    id : '',
    driver : '',
    usuario : '',
    basedatos : '',
    clave : '',
    host : '',
    puerto : '',
    url : '',
    descripcion : '',
    estatus : false,
  }

      // public
      public data: any;
      public selectedOption = 10;
      public ColumnMode = ColumnMode;
      public selectStatus: any = [
        { name: 'Todos', value: '' },
        { name: 'Activo', value: 'Activo' },
        { name: 'Inactivo', value: 'Inactivo' },
      ];
    
      public selectedStatus = [];
      public searchValue = '';
      public ListarConex = [];
    
      // decorator
      @ViewChild(DatatableComponent) table: DatatableComponent;
    
      // private
      private tempData = [];
      private _unsubscribeAll: Subject<any>;
      public rows;
      public tempFilterData;
      public previousStatusFilter = '';
  

  public contentHeader: object

  constructor(
    private modalService: NgbModal,
    private _coreConfigService: CoreConfigService,
    private comunicacionesService : ComunicacionesService,
    private apiService : ApiService, 
    private conexionesService : ConexionesService, 
  ) { 
    this._unsubscribeAll = new Subject();
  }

  

  ngOnInit(): void {
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      // If we have zoomIn route Transition then load datatable after 450ms(Transition will finish in 400ms)
      if (config.layout.animation === 'zoomIn') {
        setTimeout(() => {
            this.data = this.ListarConex;
            this.rows = this.data;
            this.tempData = this.rows;
            this.tempFilterData = this.rows;
        }, 450);
      } else {
          this.data = this.ListarConex;
          this.rows = this.data;
          this.tempData = this.rows;
          this.tempFilterData = this.rows;
      }
    });
    // this.ListarIP()
    // this.CargarDrivers()
    this.ListarConexiones()

    this.contentHeader = {
      headerTitle: 'Redes',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Conexiones',
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


  // modal Open Small
  modalOpenSM(modalXL) {
    this.modalService.open(modalXL, {
      centered: true,
      size: 'xl' // size: 'xs' | 'sm' | 'lg' | 'xl'
    });
  }

    /**
   * filterUpdate
   *
   * @param event
   */
     filterUpdate(event) {
      // Reset ng-select on search
      this.selectedStatus = this.selectStatus[0];
      const val = event.target.value.toLowerCase();
      // filter our data
      const temp = this.tempData.filter(function (d) {
        return d.basedatos.toLowerCase().indexOf(val) !== -1 || !val;
      });
      // update the rows
      this.rows = temp;
      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
    }

    /**
     * Filter By Roles
     *
     * @param event
     */
    filterByStatus(event) {
      const filter = event ? event.value : '';
      this.previousStatusFilter = filter;
      this.tempFilterData = this.filterRows(filter);
      this.rows = this.tempFilterData;
    }
  
    /**
     * Filter Rows
     *
     * @param statusFilter
     */
    filterRows(statusFilter): any[] {
      // Reset search on select change
      this.searchValue = '';
  
      statusFilter = statusFilter.toLowerCase();
  
      return this.tempData.filter(row => {
        const isPartialNameMatch = row.activo.toLowerCase().indexOf(statusFilter) !== -1 || !statusFilter;
        return isPartialNameMatch;
      });
    }
  
  async ListarConexiones(){
    this.xAPI.funcion = "LESBDrivers";
    await this.apiService.Ejecutar(this.xAPI).subscribe(
      (data) => {
        this.ListarConex = data;
        this.data = this.ListarConex;
        this.rows = this.data.map(e => { e.activo = e.estatus == false ? 'Inactivo' : 'Activo'; return e });
        this.tempData = this.rows;
        this.tempFilterData = this.rows;
      },
      (error) => {
        console.log(error)
      }
    )
  }
  

}
