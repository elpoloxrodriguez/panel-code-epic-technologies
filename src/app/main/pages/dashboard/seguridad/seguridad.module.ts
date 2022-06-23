import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { SeguridadRoutingModule } from './seguridad-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    ContentHeaderModule
  ]
})
export class SeguridadModule { }
