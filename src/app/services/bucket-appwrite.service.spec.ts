import { TestBed } from '@angular/core/testing';

import { BucketAppwriteService } from './bucket-appwrite.service';

describe('BucketAppwriteService', () => {
  let service: BucketAppwriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BucketAppwriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
