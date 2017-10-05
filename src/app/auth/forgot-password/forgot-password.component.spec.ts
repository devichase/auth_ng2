/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Http } from '@angular/http';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { MaterialModule } from '@angular/material';

import { ForgotPasswordComponent } from './forgot-password.component';
import { AuthComponent } from 'app/auth/auth.component';

import { AuthService } from 'app/auth/auth.service';
import { IdentityService } from 'app/core/identity.service';

const mockRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'forgot-password', component: ForgotPasswordComponent },
    ]
  }
];

xdescribe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(mockRoutes),
        MaterialModule,
      ],
      declarations: [
        ForgotPasswordComponent,
        AuthComponent
      ],
      providers: [
        AuthService,
        {
          provide: AuthHttp,
          useFactory: (http) => {
            return new AuthHttp(new AuthConfig(), http);
          },
          deps: [Http]
        },
        IdentityService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
