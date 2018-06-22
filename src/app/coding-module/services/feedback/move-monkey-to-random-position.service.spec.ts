import { TestBed, inject } from '@angular/core/testing';

import { MoveMonkeyToRandomPositionService } from './move-monkey-to-random-position.service';

describe('MoveMonkeyToRandomPositionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoveMonkeyToRandomPositionService]
    });
  });

  it('should be created', inject([MoveMonkeyToRandomPositionService], (service: MoveMonkeyToRandomPositionService) => {
    expect(service).toBeTruthy();
  }));
});
