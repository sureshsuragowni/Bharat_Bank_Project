import { TestBed } from '@angular/core/testing';

import { OpenSavingsAccountService } from './open-savings-account.service';

describe('OpenSavingsAccountService', () => {
  let service: OpenSavingsAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenSavingsAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
