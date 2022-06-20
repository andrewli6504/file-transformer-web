import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', loadChildren: () => import('./auth-pages/signup/signup.module').then(m => m.SignupModule) },
  { path: 'login', loadChildren: () => import('./auth-pages/login/login.module').then(m => m.LoginModule) },
  { path: 'reset-password', loadChildren: () => import('./auth-pages/reset-password/reset-password.module').then(m => m.ResetPasswordModule) },
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
