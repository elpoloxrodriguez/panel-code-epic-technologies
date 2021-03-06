import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreCommonModule } from '@core/common.module';


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, ContentHeaderModule, NgbModule, FormsModule, ReactiveFormsModule, CoreCommonModule],

})
export class HerramientasModule { }
