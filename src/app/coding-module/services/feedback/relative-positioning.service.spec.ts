import { TestBed, inject } from '@angular/core/testing';

import { RelativePositioningService } from './relative-positioning.service';

describe('RelativePositioningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RelativePositioningService]
    });
  });

  it('should be created', inject([RelativePositioningService], (service: RelativePositioningService) => {
    expect(service).toBeTruthy();
  }));
});
