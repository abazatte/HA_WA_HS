import { TestBed } from '@angular/core/testing';

import { BahnhofdataService } from './bahnhofdata.service';

describe('BahnhofdataService', () => {
  let service: BahnhofdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BahnhofdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
