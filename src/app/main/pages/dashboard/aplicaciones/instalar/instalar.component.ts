import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService, IAPICore } from '@core/services/apicore/api.service';
import { IAplicacion, SoftwareService } from '@core/services/aplicaciones/software.service';
import { ComunicacionesService } from '@core/services/comunicaciones/comunicaciones.service';
import { NgSelectConfig } from '@ng-select/ng-select';

import Stepper from 'bs-stepper';

@Component({
  selector: 'app-instalar',
  templateUrl: './instalar.component.html',
  styleUrls: ['./instalar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InstalarComponent implements OnInit {
  // public
  public contentHeader: object;
  public TDNameVar;
  public TDEmailVar;
  public TDFirstNameVar;
  public TDLastNameVar;
  public twitterVar;
  public facebookVar;
  public googleVar;
  public linkedinVar;
  public landmarkVar;
  public addressVar;

  public defaultColDef
  public rowSelection


  public xAPI : IAPICore = {
    id            : '',
    funcion       : '',
    relacional    : false,
    concurrencia  : false,
    retorna       : false,
    migrar        : false,
    parametros    : '',
    modulo        : '',
    valores       : null,
    logs          : false,
    cache         : 0,
    estatus       : false
  };

  public iApp : IAplicacion = {
    id    : '',
    type  : '0',
    serv  : '0',
    nomb  : '',
    vers  : '',
    sope  : '0',  //Sistema Operativo
    db    : '0',  //Base de datos
    idio  : '0',  //Lenguaje de Programacion
    obse  : '',   //Comentarios del sistemaoperativo
    user  : '',   //Rol creador del sistema
  }

  selectBasic = []


  public selectMulti = [{ name: 'English' }, { name: 'French' }, { name: 'Spanish' }];
  public selectMultiSelected;

  dataApp = []
   hosts  = []
  // private
  private horizontalWizardStepper: Stepper;

    /**
   * Horizontal Wizard Stepper Next
   *
   * @param data
   */
     horizontalWizardStepperNext(data) {
      if (data.form.valid === true) {
        this.horizontalWizardStepper.next();
      }
    }
    /**
     * Horizontal Wizard Stepper Previous
     */
    horizontalWizardStepperPrevious() {
      this.horizontalWizardStepper.previous();
    }

    async ListarIP(){
      await this.comunicacionesService.Listar().subscribe(
        (data) => { 
          this.hosts = data
          console.log(this.hosts)
        },
        (error) => {
          console.log(error)
        }
      )
    }
  
    async lstAplicaciones(){
      this.xAPI.funcion = "LstAplicaciones";
      this.xAPI.valores = null;
      await this.apiService.Ejecutar(this.xAPI).subscribe(
        (data) => {
          data.Cuerpo.forEach(e => {          
            this.dataApp.push({id: parseInt(e.id), name: e.nomb + " | " + e.vers });  
          });             
        },
        (error) => {
          console.log(error)
        }
      )
    }

    /**
     * On Submit
     */
    onSubmit() {
      alert('Submitted!!');
      return false;
    }

    
  constructor(
    private config: NgSelectConfig,
    private apiService : ApiService,
    private comunicacionesService : ComunicacionesService,
  ) {
    this.defaultColDef = {
      flex: 1,
      minWidth: 100,
    };
    this.config.notFoundText = 'Custom not found';
      this.config.appendTo = 'body';
      this.config.bindValue = 'value';
      // 
    this.rowSelection = 'single';
    this.iApp.user = 'administrador';
   }

  ngOnInit() {
    this.ListarIP()
    this.lstAplicaciones()
    this.horizontalWizardStepper = new Stepper(document.querySelector('#stepper1'), {});

    // content header
    this.contentHeader = {
      headerTitle: 'Form Wizard',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Forms',
            isLink: true,
            link: '/'
          },
          {
            name: 'Form Wizard',
            isLink: false
          }
        ]
      }
    };
  }
}
