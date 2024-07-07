import { TestBed } from '@angular/core/testing';

import { CertifiateService } from './certifiate.service';

describe('CertifiateService', () => {
  let service: CertifiateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertifiateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
