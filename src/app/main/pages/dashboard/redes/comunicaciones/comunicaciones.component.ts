import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunicaciones',
  templateUrl: './comunicaciones.component.html',
  styleUrls: ['./comunicaciones.component.scss']
})
export class ComunicacionesComponent implements OnInit {

  public contentHeader: object
  
  constructor() { }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Redes',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Comunicaciones',
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
