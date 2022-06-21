import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreCommonModule } from '@core/common.module';

import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [],
  imports: [CommonModule, NgSelectModule, RouterModule, ContentHeaderModule, NgbModule, FormsModule, ReactiveFormsModule, CoreCommonModule]
  
})
export class RedesModule { }
