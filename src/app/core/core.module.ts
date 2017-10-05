import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdIconRegistry } from '@angular/material';

import { UtilsService } from './utils.service';
import { SidenavService } from './sidenav.service';
import { AuthGuard } from 'app/auth/auth.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [
  ],
  providers: [
    MdIconRegistry,
    UtilsService,
    SidenavService,
    AuthGuard,
  ]
})

export class CoreModule { }
