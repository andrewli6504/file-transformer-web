import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestApiBaseService } from '../rest-api-base/rest-api-base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  hasStorageAccess: boolean = false;

  constructor(
    private restApiBaseService: RestApiBaseService,
    private http: HttpClient,
  ) {
    this.checkStorageAccess();
  }

  checkStorageAccess(): void {
    this.hasStorageAccess = false;
    try {
      if(localStorage) {
        var dt = new Date().getTime().toString();
        localStorage.setItem("__test", dt);
        var retrievedVal = localStorage.getItem("__test");
        localStorage.removeItem("__test");
        if (dt == retrievedVal) this.hasStorageAccess = true;
      }
    } catch (e) {
      console.log(e);
    }
  }

  
  public signupUser(signupDetails: any) {
    return this.restApiBaseService.post("/createUser", { ...signupDetails });
  }
}
