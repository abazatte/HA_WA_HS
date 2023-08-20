import { TestBed } from '@angular/core/testing';

import { BahnhofpictureService } from './bahnhofpicture.service';

describe('BahnhofpictureService', () => {
  let service: BahnhofpictureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BahnhofpictureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
