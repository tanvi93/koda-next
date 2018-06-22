import { TestBed, inject } from '@angular/core/testing';

import { GameStageService } from './game-stage.service';

describe('GameStageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameStageService]
    });
  });

  it('should be created', inject([GameStageService], (service: GameStageService) => {
    expect(service).toBeTruthy();
  }));
});
