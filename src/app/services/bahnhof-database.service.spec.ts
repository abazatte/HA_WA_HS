import { TestBed } from '@angular/core/testing';

import { BahnhofDatabaseService } from './bahnhof-database.service';

describe('BahnhofDatabaseService', () => {
  let service: BahnhofDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BahnhofDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
