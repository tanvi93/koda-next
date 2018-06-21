import { TestBed, inject } from '@angular/core/testing';

import { NextAvatarService } from './next-avatar.service';

describe('NextAvatarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NextAvatarService]
    });
  });

  it('should be created', inject([NextAvatarService], (service: NextAvatarService) => {
    expect(service).toBeTruthy();
  }));
});
