import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./landing-page/landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'signup', loadChildren: () => import('./auth-pages/signup/signup.module').then(m => m.SignupModule) },
  { path: 'login', loadChildren: () => import('./auth-pages/login/login.module').then(m => m.LoginModule) },
  { path: 'reset-password', loadChildren: () => import('./auth-pages/reset-password/reset-password.module').then(m => m.ResetPasswordModule) },
  { path: 'job-creation', loadChildren: () => import('./jobs/job-creation/job-creation.module').then(m => m.JobCreationModule) },
  { path: 'connection-creation', loadChildren: () => import('./connections/connection-creation/connection-creation.module').then(m => m.ConnectionCreationModule) },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
