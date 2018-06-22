import { TestBed, inject } from '@angular/core/testing';

import { NaptimeActivityService } from './naptime-activity.service';

describe('NaptimeActivityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NaptimeActivityService]
    });
  });

  it('should be created', inject([NaptimeActivityService], (service: NaptimeActivityService) => {
    expect(service).toBeTruthy();
  }));
});
