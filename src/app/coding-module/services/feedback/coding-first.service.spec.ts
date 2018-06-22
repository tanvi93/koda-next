import { TestBed, inject } from '@angular/core/testing';

import { CodingFirstService } from './coding-first.service';

describe('CodingFirstService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodingFirstService]
    });
  });

  it('should be created', inject([CodingFirstService], (service: CodingFirstService) => {
    expect(service).toBeTruthy();
  }));
});
