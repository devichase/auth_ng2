import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { Subscription } from 'rxjs';

import { Account } from 'app/auth/auth.interface';
import { EmailRegex } from 'app/shared/shared-base.interface';

import { AuthService } from 'app/auth/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
  submitted = false;
  loading = false;
  returnUrl: string = '';
  user: FormGroup;
  serviceSubscription: Subscription;
  snackbarSubscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private snackBar: MdSnackBar,
  ) { }

  ngOnInit() {
    // Get returnUrl from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.user = this.formBuilder.group({
      account: this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern(EmailRegex)]],
        password: ['', Validators.required],
        rememberMe: [false]
      })
    });
  }

  /**
   * Authentication process
   */
  onSubmit(): void {
    // Prevent multiclick
    this.submitted = true;
    this.loading = true;

    // Configure snackBar
    let snackbarConfig: MdSnackBarConfig = {
      duration: 5000
    };

    let snackBarAction = this.snackBar.open(`Authentification en cours...`, 'X', snackbarConfig);
    this.snackbarSubscription = snackBarAction.afterDismissed()
      .subscribe(() => {
        this.submitted = false;
        this.loading = false;

        // Set user as authenticated
        this.authService.isAuthenticated = true;

        // Navigate the user to the dashboard
        this.router.navigate(['/pages']);
      });
  }

  ngOnDestroy() {
    if (this.serviceSubscription) {
      this.serviceSubscription.unsubscribe();
    }
    if (this.snackbarSubscription) {
      this.snackbarSubscription.unsubscribe();
    }
  }
}
