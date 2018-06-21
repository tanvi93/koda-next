import { TestBed, inject } from '@angular/core/testing';

import { MouseCoordinatesBlockService } from './mouse-coordinates-block.service';

describe('MouseCoordinatesBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MouseCoordinatesBlockService]
    });
  });

  it('should be created', inject([MouseCoordinatesBlockService], (service: MouseCoordinatesBlockService) => {
    expect(service).toBeTruthy();
  }));
});
