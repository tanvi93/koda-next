import { TestBed, inject } from '@angular/core/testing';

import { CharacterClickEventService } from './character-click-event.service';

describe('CharacterClickEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterClickEventService]
    });
  });

  it('should be created', inject([CharacterClickEventService], (service: CharacterClickEventService) => {
    expect(service).toBeTruthy();
  }));
});
