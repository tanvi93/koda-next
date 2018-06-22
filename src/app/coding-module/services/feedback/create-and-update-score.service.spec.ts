import { TestBed, inject } from '@angular/core/testing';

import { CreateAndUpdateScoreService } from './create-and-update-score.service';

describe('CreateAndUpdateScoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateAndUpdateScoreService]
    });
  });

  it('should be created', inject([CreateAndUpdateScoreService], (service: CreateAndUpdateScoreService) => {
    expect(service).toBeTruthy();
  }));
});
