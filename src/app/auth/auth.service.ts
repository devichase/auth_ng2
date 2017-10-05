import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// import { tokenNotExpired, AuthHttp } from 'angular2-jwt';

import { environment } from 'environments/environment';

@Injectable()
export class AuthService {
  private _isAuthenticated: boolean = false;

  get isAuthenticated() {
    return this._isAuthenticated;
  }

  // Temporary for demo
  set isAuthenticated(value) {
    this._isAuthenticated = value;
  }

  constructor(
    private http: Http,
    // private authHttp: AuthHttp,
    private router: Router
  ) { }

  logOut() {
    this.isAuthenticated = false;
    // Redirect the user
    this.router.navigate(['/auth/login']);
  }

  /* ========================= */
  /**
   * Error message display when catch is called
   * @param {*} error
   * @returns {Promise<any>}
   */
  private handleError(error: any): Observable<any> {
    // console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }
}
