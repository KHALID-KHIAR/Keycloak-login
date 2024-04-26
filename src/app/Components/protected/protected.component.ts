import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})
export class ProtectedComponent {
  constructor(private keyclock:KeycloakService){}
loggout() {
this.keyclock.logout("http://localhost:4500").then() ;
}

}
