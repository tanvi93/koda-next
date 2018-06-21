import { TestBed, inject } from '@angular/core/testing';

import { MagicalCaveService } from './magical-cave.service';

describe('MagicalCaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagicalCaveService]
    });
  });

  it('should be created', inject([MagicalCaveService], (service: MagicalCaveService) => {
    expect(service).toBeTruthy();
  }));
});
