import { TestBed } from '@angular/core/testing';

import { RxApiGatewayService } from './rx-api-gateway.service';

describe('RxApiGatewayService', () => {
  let service: RxApiGatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxApiGatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
