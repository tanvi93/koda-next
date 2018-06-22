import { TestBed, inject } from '@angular/core/testing';

import { MakeFruitFallService } from './make-fruit-fall.service';

describe('MakeFruitFallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MakeFruitFallService]
    });
  });

  it('should be created', inject([MakeFruitFallService], (service: MakeFruitFallService) => {
    expect(service).toBeTruthy();
  }));
});
