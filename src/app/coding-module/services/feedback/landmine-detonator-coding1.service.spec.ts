import { TestBed, inject } from '@angular/core/testing';

import { LandmineDetonatorService } from './landmine-detonator.service';

describe('LandmineDetonatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LandmineDetonatorService]
    });
  });

  it('should be created', inject([LandmineDetonatorService], (service: LandmineDetonatorService) => {
    expect(service).toBeTruthy();
  }));
});
