import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';

import { PagesComponent } from './pages.component';

// import { SharedBaseModule } from 'app/shared/shared-base.module';
import {MatTooltipModule, MatMenuModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NgaModule.forRoot(),
    routing,
    // SharedBaseModule,
    // MatTooltipModule,
    MatMenuModule,
    // MatIconModule,
  ],
  declarations: [PagesComponent]
})
export class PagesModule {
}
