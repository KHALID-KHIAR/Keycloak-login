import { NgModule, inject } from '@angular/core';
import { CanActivateFn, RouterModule, Routes } from '@angular/router';
import { UnprotectedComponent } from './Components/unprotected/unprotected.component';
import { ProtectedComponent } from './Components/protected/protected.component';
import { AuthKeyclockguard } from './Guards/AuthKeyclock.guard';
import { LoginComponent } from './Components/login/login.component';

const isAuthenticated: CanActivateFn = (route, state) => {
  return inject(AuthKeyclockguard).isAccessAllowed(route, state);
}

const routes: Routes = [
  {path: '',component: UnprotectedComponent},
  {path: 'protected',component: ProtectedComponent ,canActivate: [AuthKeyclockguard]},
  {path: '**', redirectTo: 'unprotected'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
