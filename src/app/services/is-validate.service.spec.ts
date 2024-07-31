import { TestBed } from '@angular/core/testing';

import { IsValidateService } from './is-validate.service';

describe('IsValidateService', () => {
  let service: IsValidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsValidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
