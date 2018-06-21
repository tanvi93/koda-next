import { TestBed, inject } from '@angular/core/testing';

import { RotateSpriteBlockService } from './rotate-sprite-block.service';

describe('RotateSpriteBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RotateSpriteBlockService]
    });
  });

  it('should be created', inject([RotateSpriteBlockService], (service: RotateSpriteBlockService) => {
    expect(service).toBeTruthy();
  }));
});
