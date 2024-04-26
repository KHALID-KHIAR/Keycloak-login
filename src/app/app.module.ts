import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { UnprotectedComponent } from './Components/unprotected/unprotected.component';
import { ProtectedComponent } from './Components/protected/protected.component';
import { LoginComponent } from './Components/login/login.component';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'cock-pite-server-side',
        clientId: 'login-keycloack'
      },
      initOptions: {
        onLoad: 'check-sso'
      }
    });
}
@NgModule({
  declarations: [
    AppComponent,
    UnprotectedComponent,
    ProtectedComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
