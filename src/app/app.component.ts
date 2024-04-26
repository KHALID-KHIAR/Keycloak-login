import { Component, inject } from '@angular/core';
import { AuthService } from './Service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'keycloakLogin';
  // const auth = inject(AuthService);
  constructor(private auth:AuthService){
    auth.isLoggedIn().then(res=>{
      console.log("Is LoggedIn : "+res);

    })


  }


  
}
