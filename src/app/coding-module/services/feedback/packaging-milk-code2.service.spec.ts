import { TestBed, inject } from '@angular/core/testing';

import { PackagingMilkCode2Service } from './packaging-milk-code2.service';

describe('PackagingMilkCode2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PackagingMilkCode2Service]
    });
  });

  it('should be created', inject([PackagingMilkCode2Service], (service: PackagingMilkCode2Service) => {
    expect(service).toBeTruthy();
  }));
});
