import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { SharedBaseModule } from 'app/shared/shared-base.module';
import { CoreModule } from 'app/core/core.module';
import { AuthModule } from 'app/auth/auth.module';
import { PagesModule } from 'app/ng2/pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { NgaModule } from './ng2/theme/nga.module';

import { AppComponent } from './app.component';

import { GlobalState } from './global.state';
import { AppState, InternalStateType } from './app.service';

const APP_PROVIDERS = [
  AppState,
  GlobalState
];

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    SharedBaseModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http],
      }
    }),
    // NgaModule.forRoot(),
    CoreModule,
    AuthModule,
    PagesModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    APP_PROVIDERS
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
