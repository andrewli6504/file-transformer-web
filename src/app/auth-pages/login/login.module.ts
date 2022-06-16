import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
<<<<<<< HEAD
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { AvatarModule } from 'ngx-avatar';
=======
>>>>>>> 2c3f40b (working on signup page)


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
    LoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AvatarModule,
=======
    LoginRoutingModule
>>>>>>> 2c3f40b (working on signup page)
  ]
})
export class LoginModule { }
