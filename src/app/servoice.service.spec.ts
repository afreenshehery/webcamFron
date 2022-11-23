import { TestBed } from '@angular/core/testing';

import { ServoiceService } from './servoice.service';

describe('ServoiceService', () => {
  let service: ServoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
