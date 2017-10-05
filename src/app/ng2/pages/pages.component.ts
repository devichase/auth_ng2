import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';

// import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { GlobalState } from '../../global.state';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from '../theme/services';
import { BaThemeConfig } from '../theme/theme.config';
import { layoutPaths } from '../theme/theme.constants';

@Component({
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit {

  isMenuCollapsed;

  constructor(
    private _menuService: BaMenuService,
    private _state: GlobalState,
    private _imageLoader: BaImageLoaderService,
    private _spinner: BaThemeSpinner,
    private themeConfig: BaThemeConfig,
    private translateService: TranslateService
  ) {  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
    this.translateService.addLangs(['en', 'fr']);
    this.translateService.setDefaultLang('fr');
    this.translateService.use('fr');

    this.themeConfig.config();

    this._loadImages();

    this._state.subscribe('menu.isCollapsed', (isCollapsed: boolean) => {
      this.isMenuCollapsed = isCollapsed;
      window.localStorage.setItem('isMenuCollapsed', isCollapsed.toString());
    });
  }
  ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

  private _loadImages(): void {
    // register some loaders
    BaThemePreloader.registerLoader(this._imageLoader.load('/assets/img/sky-bg.jpg'));
  }
}
