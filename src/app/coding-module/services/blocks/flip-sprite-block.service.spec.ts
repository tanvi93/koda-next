import { TestBed, inject } from '@angular/core/testing';

import { FlipSpriteBlockService } from './flip-sprite-block.service';

describe('FlipSpriteBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlipSpriteBlockService]
    });
  });

  it('should be created', inject([FlipSpriteBlockService], (service: FlipSpriteBlockService) => {
    expect(service).toBeTruthy();
  }));
});
