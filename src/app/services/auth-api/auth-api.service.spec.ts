import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuthApiService } from './auth-api.service';

describe('AuthApiService', () => {
  let service: AuthApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });


    //Mocking local storage for testing
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);

    service = TestBed.inject(AuthApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have storage access', () => {
    expect(service.hasStorageAccess).toBeTrue();
  })

  it('should set session', () => {
    let authResponse = {
      "accessToken": "accessToken",
      "email": "email",
      "firstName": "firstName",
      "lastName": "lastName",
      "username": "username",
      "id": "id"
    };

    service.setSession(authResponse);

    expect(localStorage.getItem("token")).toEqual("accessToken");
    expect(localStorage.getItem("email")).toEqual("email");
    expect(localStorage.getItem("firstname")).toEqual("firstName");
    expect(localStorage.getItem("lastname")).toEqual("lastName");
    expect(localStorage.getItem("username")).toEqual("username");
    expect(localStorage.getItem("userID")).toEqual("id");
  });

  it('should clear session', () => {
    localStorage.setItem("token", "token");
    service.clearSession();

    expect(localStorage.getItem("token")).toBeNull();
  });

  // it('should create user', () => {

  // });
});
