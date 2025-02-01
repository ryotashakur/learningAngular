import { TestBed } from '@angular/core/testing';

import { DevinServiceService } from './devin-service.service';

describe('DevinServiceService', () => {
  let service: DevinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
