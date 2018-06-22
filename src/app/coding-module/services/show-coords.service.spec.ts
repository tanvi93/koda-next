import { TestBed, inject } from '@angular/core/testing';

import { ShowCoordsService } from './show-coords.service';

describe('ShowCoordsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowCoordsService]
    });
  });

  it('should be created', inject([ShowCoordsService], (service: ShowCoordsService) => {
    expect(service).toBeTruthy();
  }));
});
