import { TestBed } from '@angular/core/testing';

import { TransferStateManagerService } from './transfer-state-manager.service';

describe(TransferStateManagerService.name, () => {
  let service: TransferStateManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferStateManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
