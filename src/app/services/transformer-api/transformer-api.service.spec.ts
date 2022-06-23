import { TestBed } from '@angular/core/testing';

import { TransformerApiService } from './transformer-api.service';

describe('TransformerApiService', () => {
  let service: TransformerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransformerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
