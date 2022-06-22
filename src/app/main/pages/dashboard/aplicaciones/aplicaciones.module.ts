import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { AplicacionesRoutingModule } from './aplicaciones-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContentHeaderModule,
    AplicacionesRoutingModule
  ]
})
export class AplicacionesModule { }
