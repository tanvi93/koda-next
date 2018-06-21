import { TestBed, inject } from '@angular/core/testing';

import { MonkeyMoveToNewPositionService } from './monkey-move-to-new-position.service';

describe('MonkeyMoveToNewPositionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonkeyMoveToNewPositionService]
    });
  });

  it('should be created', inject([MonkeyMoveToNewPositionService], (service: MonkeyMoveToNewPositionService) => {
    expect(service).toBeTruthy();
  }));
});
