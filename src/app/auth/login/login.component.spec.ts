/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject, TestModuleMetadata, fakeAsync, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Http } from '@angular/http';
import { Routes, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { MaterialModule } from '@angular/material';

import { LoginComponent } from './login.component';
import { AuthComponent } from 'app/auth/auth.component';
import { Login } from 'app/auth/auth.interface';

import { AuthService } from './../auth.service';

const mockRoutes: Routes = [
  {
    path: 'auth', component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  }
];

xdescribe('LoginComponent', () => {
  let componentInstance: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
});
