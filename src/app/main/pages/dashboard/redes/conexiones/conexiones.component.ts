import { Component, OnInit } from '@angular/core';
import { ApiService, IAPICore } from '@core/services/apicore/api.service';
import { ComunicacionesService } from '@core/services/comunicaciones/comunicaciones.service';
import { ConexionesService, IConexiones } from '@core/services/conexiones/conexiones.service';


@Component({
  selector: 'app-conexiones',
  templateUrl: './conexiones.component.html',
  styleUrls: ['./conexiones.component.scss']
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
  estatus = 0
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

  public contentHeader: object

  constructor(
    private comunicacionesService : ComunicacionesService,
    private apiService : ApiService, 
    private conexionesService : ConexionesService, 
  ) { 
  }

  ngOnInit(): void {
    this.ListarIP()
    this.CargarDrivers()
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

  async ListarIP(){
    await this.comunicacionesService.Listar().subscribe(
      (data) => {
        this.hosts = data
      },
      (error) => {
        console.log(error)
      }
    )
  }

  async CargarDrivers(){
    await this.comunicacionesService.ListarDrivers().subscribe(
      (data) => {
        this.drivers = data
      },
      (error) => {
        console.error(error)
      }
    )
  }

  async ListarConexiones(){
    this.xAPI.funcion = "LESBDrivers";
    await this.apiService.Ejecutar(this.xAPI).subscribe(
      (data) => {
        this.rowData = data;
      },
      (error) => {
        console.log(error)
      }
    )
  }
  
  Obtener(){
    var est = this.estatus==1?true:false
    var surl = (this.protocolo === "0" || this.protocolo == undefined)?"":this.protocolo.toLowerCase() + "://" + this.url.toLowerCase()
    this.xDri = {
      id : this.identificador,
      driver : this.driver,
      usuario : this.usuario,
      basedatos : this.basedatos,
      clave : this.clave,
      host : this.host,
      puerto : this.puerto,
      url : surl,
      descripcion : this.descripcion,
      estatus : est,
    }
    return this.xDri
  }

  onVisibleDrive(){
    this.divDBng = ''
    this.divURLng = ''
    if (this.driver == "puenteurl"){
      this.divDBng = 'none'
      this.divURLng = ''
    }else{
      this.divDBng = ''
      this.divURLng = 'none'
      if (this.driver == 'oracle19c') {
        document.getElementById("lblnbd").innerHTML = "Oracle_SID"
      }else{
        document.getElementById("lblnbd").innerHTML = "Base de Datos"
      }
    }
  }

  

}
