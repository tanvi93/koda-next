import { TestBed, inject } from '@angular/core/testing';

import { ThrowThreefruitsService } from './throw-threefruits.service';

describe('ThrowThreefruitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThrowThreefruitsService]
    });
  });

  it('should be created', inject([ThrowThreefruitsService], (service: ThrowThreefruitsService) => {
    expect(service).toBeTruthy();
  }));
});
