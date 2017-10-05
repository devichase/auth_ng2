import { NgModule } from '@angular/core';

import { MatInputModule, MatSnackBarModule } from '@angular/material';

import { SharedBaseModule } from 'app/shared/shared-base.module';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';
import { LoginComponent } from 'app/auth/login/login.component';
import { ForgotPasswordComponent } from 'app/auth/forgot-password/forgot-password.component';

import { AuthService } from './auth.service';

@NgModule({
  imports: [
    SharedBaseModule,
    AuthRoutingModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
