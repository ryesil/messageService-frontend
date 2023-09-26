import { TestBed } from '@angular/core/testing';

import { TimestamService } from './timestam.service';

describe('TimestamService', () => {
  let service: TimestamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimestamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
