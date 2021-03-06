import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UtilService} from './services/util/util.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {TranslationModule, L10nLoader} from 'angular-l10n';
import {l10nConfig} from './config/AppConfig';
import {LayoutModule} from './modules/shared/layout/layout.module';
import { AuthGuard } from './services/authentication/auth.guard';
import { AuthInterceptor } from './services/authentication/auth.interceptor';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule, BrowserAnimationsModule, AppRoutingModule, HttpClientModule, LayoutModule,
    TranslationModule.forRoot(l10nConfig)
  ],
  providers: [UtilService, AuthGuard, CookieService 
    //  {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public l10nLoader: L10nLoader) {
    this.l10nLoader.load();
  }
}
