import { TestBed, inject } from '@angular/core/testing';

import { DiscoLightCodingService } from './disco-light-coding.service';

describe('DiscoLightCodingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscoLightCodingService]
    });
  });

  it('should be created', inject([DiscoLightCodingService], (service: DiscoLightCodingService) => {
    expect(service).toBeTruthy();
  }));
});
