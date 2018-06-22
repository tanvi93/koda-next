import { TestBed, inject } from '@angular/core/testing';

import { VenusFlytrapService } from './venus-flytrap.service';

describe('VenusFlytrapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VenusFlytrapService]
    });
  });

  it('should be created', inject([VenusFlytrapService], (service: VenusFlytrapService) => {
    expect(service).toBeTruthy();
  }));
});
