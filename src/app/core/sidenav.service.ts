import { Injectable } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Injectable()
export class SidenavService {
  private _sidenav: MdSidenav;

  get sidenav() { return this._sidenav; }
  set sidenav(value) { this._sidenav = value; }

  constructor() { }

  openSidenav() {
    if (this.sidenav) {
      this.sidenav.open();
    }
  }
}
