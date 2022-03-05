import { TestBed } from '@angular/core/testing';

import { VagasServiceService } from './vagas-service.service';

describe('VagasServiceService', () => {
  let service: VagasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VagasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
