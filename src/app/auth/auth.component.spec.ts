/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject, TestModuleMetadata, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Http } from '@angular/http';
import { Routes, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';

import { MaterialModule } from '@angular/material';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service';
import { GeneralNavigationService } from 'app/core/general-navigation.service';

const mockRoutes: Routes = [
  {
    path: 'auth', component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  }
];

xdescribe('AuthComponent', () => {

});
