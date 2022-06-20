import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthApiService } from 'src/app/services/auth-api/auth-api.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss', '../auth-pages.scss']
})
export class ResetPasswordComponent implements OnInit {

  public resetForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public authApiService: AuthApiService,
    ) { }

  ngOnInit(): void {
    this.initializeResetForm();
  }

  initializeResetForm() {
    this.resetForm = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
    });
  }

  resetPassword(): void {

  }
}
