import { TestBed, inject } from '@angular/core/testing';

import { SpriteXyService } from './sprite-xy.service';

describe('SpriteXyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpriteXyService]
    });
  });

  it('should be created', inject([SpriteXyService], (service: SpriteXyService) => {
    expect(service).toBeTruthy();
  }));
});
