import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CurvaHomeComponent } from './curva-home/curva-home.component';

import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [{
  path: '',
  component: LoginComponent
},
{
  path: 'dashboard',
  canActivate: [AuthGuardService],
  component: CurvaHomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
