import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RestApiBaseService } from './rest-api-base.service';

describe('RestApiBaseService', () => {
  let service: RestApiBaseService;

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
      
    localStorage.setItem("token", "token");

    service = TestBed.inject(RestApiBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get headers', () => {
    expect(service.getHeaders().get("Authorization")).toEqual("token");
  });

  // it('should ')
});
