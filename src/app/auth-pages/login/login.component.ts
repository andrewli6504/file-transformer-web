import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/services/auth-api/auth-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../auth-pages.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public authApiService: AuthApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // clear old user session once user is navigated to this page
    this.authApiService.clearSession();
    this.initializeUserForm();
  }

  initializeUserForm() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    });
  }

  loginUser(): void {
    const username: string = this.loginForm.get("email").value;
    const password: string = this.loginForm.get("password").value;

    var cred = {
      username: username.trim(),
      password: password.trim()
    }

    this.authApiService.login(cred).subscribe(resp => {
      console.log(resp);
      if(resp["error"]) {
        //TODO: Handle error
        return;
      }
      
      this.authApiService.setSession(resp);
      setTimeout(() => {
        this.router.navigateByUrl("/admin");
      }, 1000);
    })
  }
}
