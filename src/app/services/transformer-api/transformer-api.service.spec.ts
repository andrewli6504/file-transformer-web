import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TransformerApiService } from './transformer-api.service';

describe('TransformerApiService', () => {
  let service: TransformerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(TransformerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
