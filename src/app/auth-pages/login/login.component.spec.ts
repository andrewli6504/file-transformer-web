import { CommonModule } from '@angular/common';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AvatarModule } from 'ngx-avatar';
import { ComponentModule } from 'src/app/common/component.module';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ 
        RouterTestingModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AvatarModule,
        ComponentModule, ],
      providers: [ FormBuilder, HttpClient, HttpHandler ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should trigger [loginUser]', () => {
    component.loginForm.controls['email'].patchValue("test@test.com");
    component.loginForm.controls['password'].patchValue("password");
    component.loginUser();
    expect(component).toBeTruthy();
    // expect(component.loginForm.controls['email']).toBe("test@test.com");

  })

  // it('should login successfully', fakeAsync( () => {
  //   component.loginForm.controls['email'].patchValue("test@test.com");
  //   component.loginForm.controls['password'].patchValue("password");
  //   component.loginUser();
  // }))
});
