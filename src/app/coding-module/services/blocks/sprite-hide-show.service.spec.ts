import { TestBed, inject } from '@angular/core/testing';

import { SpriteHideShowService } from './sprite-hide-show.service';

describe('SpriteHideShowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpriteHideShowService]
    });
  });

  it('should be created', inject([SpriteHideShowService], (service: SpriteHideShowService) => {
    expect(service).toBeTruthy();
  }));
});
