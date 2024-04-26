import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot,} from '@angular/router';
import {KeycloakAuthGuard, KeycloakService} from 'keycloak-angular';


@Injectable({
  providedIn: 'root'
})

export class AuthKeyclockguard extends KeycloakAuthGuard {
    constructor(
      protected override readonly router: Router,
      private readonly keycloak: KeycloakService) {
      super(router, keycloak);
    }

    public async isAccessAllowed(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Promise<boolean> {
        let authenticated = this.keycloak.getKeycloakInstance().authenticated;
        if (!authenticated) {
          alert("Hello from routing !!")
          this.router.navigate(["/"])
 
          // if the user try to access a guarded route it redirects it to keycloak login
          // await this.keycloak.login({
          //   redirectUri: window.location.origin + state.url,
          // });
          return false ;
        }
        return true ;
      }
}
