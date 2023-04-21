import { TestBed } from '@angular/core/testing';

import { HygeiaService } from './hygeia.service';

describe('HygeiaService', () => {
  let service: HygeiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HygeiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
