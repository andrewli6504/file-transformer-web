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

  public clearSession(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("firstname");
    localStorage.removeItem("lastname");
    localStorage.removeItem("userID");
  }

  public setSession(authResponse): void {
    if (authResponse["accessToken"]) {
      localStorage.setItem("token", authResponse["accessToken"]);
    }
    if(authResponse["email"]){
      localStorage.setItem('email', String(authResponse["email"]));
    }
    if(authResponse["firstName"]){
      localStorage.setItem('firstname', String(authResponse["firstName"]));
    }
    if(authResponse["lastName"]){
      localStorage.setItem('lastname', String(authResponse["lastName"]));
    }
    if(authResponse["username"]){
      localStorage.setItem('username', String(authResponse["username"]));
    }
    if(authResponse["id"]){
      localStorage.setItem('userID', authResponse["id"]);
    }
  }
  
  public createUser(signupDetails: any) {
    return this.restApiBaseService.post("/createUser", { ...signupDetails });
  }

  public login(loginCredentials: any) {
    return this.restApiBaseService.post("/login", { ...loginCredentials });
  }
}
