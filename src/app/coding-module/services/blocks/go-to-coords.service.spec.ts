import { TestBed, inject } from '@angular/core/testing';

import { GoToCoordsService } from './go-to-coords.service';

describe('GoToCoordsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoToCoordsService]
    });
  });

  it('should be created', inject([GoToCoordsService], (service: GoToCoordsService) => {
    expect(service).toBeTruthy();
  }));
});
