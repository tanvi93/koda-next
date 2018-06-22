import { TestBed, inject } from '@angular/core/testing';

import { LandmineDetonatorCoding2Service } from './landmine-detonator-coding2.service';

describe('LandmineDetonatorCoding2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LandmineDetonatorCoding2Service]
    });
  });

  it('should be created', inject([LandmineDetonatorCoding2Service], (service: LandmineDetonatorCoding2Service) => {
    expect(service).toBeTruthy();
  }));
});
