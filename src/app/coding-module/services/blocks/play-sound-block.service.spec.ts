import { TestBed, inject } from '@angular/core/testing';

import { PlaySoundBlockService } from './play-sound-block.service';

describe('PlaySoundBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaySoundBlockService]
    });
  });

  it('should be created', inject([PlaySoundBlockService], (service: PlaySoundBlockService) => {
    expect(service).toBeTruthy();
  }));
});
