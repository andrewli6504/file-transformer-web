import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthApiService } from 'src/app/services/auth-api/auth-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../auth-pages.scss']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public authApiService: AuthApiService,
  ) { }

  ngOnInit(): void {
    this.initializeUserForm();
  }

  initializeUserForm() {
    this.signupForm = this.formBuilder.group({
      firstName: new FormControl("", [Validators.pattern("[a-zA-Z]+ {0,1}[a-zA-Z]* {0,1}[a-zA-Z]*$")]),
      lastName: new FormControl("", [Validators.pattern("[a-zA-Z]+ {0,1}[a-zA-Z]* {0,1}[a-zA-Z]*$")]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    });
  }

  signupUser() : void {
    const firstName: string = this.signupForm.get("firstName")!.value;
    const lastName: string = this.signupForm.get("lastName")!.value;
    const email: string = this.signupForm.get("email")!.value;
    const password: string = this.signupForm.get("password")!.value;

    var signupObj = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password: password.trim(),
    };
    
    console.log(signupObj);

    this.authApiService.signupUser(signupObj).subscribe(resp => {
      console.log(resp);
    });
  }
}
