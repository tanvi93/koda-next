import { TestBed, inject } from '@angular/core/testing';

import { MoveWithSpeedService } from './move-with-speed.service';

describe('MoveWithSpeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoveWithSpeedService]
    });
  });

  it('should be created', inject([MoveWithSpeedService], (service: MoveWithSpeedService) => {
    expect(service).toBeTruthy();
  }));
});
