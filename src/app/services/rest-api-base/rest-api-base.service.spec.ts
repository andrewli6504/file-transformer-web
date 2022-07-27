import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RestApiBaseService } from './rest-api-base.service';

describe('RestApiBaseService', () => {
  let service: RestApiBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(RestApiBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
