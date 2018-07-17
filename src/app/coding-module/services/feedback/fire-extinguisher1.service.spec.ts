import { TestBed, inject } from '@angular/core/testing';

import { FireExtinguisher1Service } from './fire-extinguisher1.service';

describe('FireExtinguisher1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireExtinguisher1Service]
    });
  });

  it('should be created', inject([FireExtinguisher1Service], (service: FireExtinguisher1Service) => {
    expect(service).toBeTruthy();
  }));
});
