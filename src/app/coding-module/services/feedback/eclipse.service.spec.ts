import { TestBed, inject } from '@angular/core/testing';

import { EclipseService } from './eclipse.service';

describe('EclipseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EclipseService]
    });
  });

  it('should be created', inject([EclipseService], (service: EclipseService) => {
    expect(service).toBeTruthy();
  }));
});
