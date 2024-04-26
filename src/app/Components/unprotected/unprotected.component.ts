import { Component } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-unprotected',
  templateUrl: './unprotected.component.html',
  styleUrls: ['./unprotected.component.scss']
})
export class UnprotectedComponent {

  constructor(private authService: AuthService){}

  login(): void {
    this.authService.login();
  }
}
