import { Injectable, inject } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  keycloak = inject(KeycloakService);

  constructor() { 
    this.keycloak.isLoggedIn().then((loggedIn) => {
      if (loggedIn) {
        this.keycloak.getKeycloakInstance().loadUserProfile();
      }
    });
  }
  public logout(): void {
    this.keycloak.logout("http://localhost:4200/").then();
  }

  login() {
    this.keycloak.login({redirectUri: "http://localhost:4200/protected"}).then();
  }


  isLoggedIn(): Promise<boolean> {
    return this.keycloak.isLoggedIn();
  }
}
