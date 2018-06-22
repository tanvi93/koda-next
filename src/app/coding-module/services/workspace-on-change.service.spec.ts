import { TestBed, inject } from '@angular/core/testing';

import { WorkspaceOnChangeService } from './workspace-on-change.service';

describe('WorkspaceOnChangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkspaceOnChangeService]
    });
  });

  it('should be created', inject([WorkspaceOnChangeService], (service: WorkspaceOnChangeService) => {
    expect(service).toBeTruthy();
  }));
});
