import { TestBed } from '@angular/core/testing';

import { NoInterceptorService } from './no-interceptor.service';

describe('NoInterceptorService', () => {
  let service: NoInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
