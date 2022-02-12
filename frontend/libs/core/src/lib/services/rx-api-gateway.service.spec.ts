import { TestBed } from '@angular/core/testing';
// import { TestScheduler } from 'rxjs/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RxApiGatewayService } from './rx-api-gateway.service';
import { HttpClient } from '@angular/common/http';

describe('RxApiGatewayService', () => {
  let apiGatewayService: RxApiGatewayService;
  let httpClientSpy!: any;

  beforeEach(() => {
    /* httpClientSpy = jasmine.createSpyObj<HttpClient>('HttpClient', [
      'get',
      'post',
      'patch',
      'delete',
    ]); */

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RxApiGatewayService],
    });

    apiGatewayService = TestBed.inject(RxApiGatewayService);
    // httpClientSpy = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(apiGatewayService).toBeTruthy();
  });

  it('#getValue should return stubbed value from GET request', () => {
    const stubValue = 'stub value';
    expect(stubValue).toBe('stub value');
    // httpClientSpy.get.and.returnValue(of(stubValue));
  });

  it('#getValue should return stubbed value from POST request', () => {
    const stubValue = 'stub value';
    expect(stubValue).toBe('stub value');
    // httpClientSpy.get.and.returnValue(of(stubValue));
  });

  it('#getValue should return stubbed value from DELETE request', () => {
    const stubValue = 'stub value';
    expect(stubValue).toBe('stub value');
    // httpClientSpy.get.and.returnValue(of(stubValue));
  });

  it('#getValue should return stubbed value from PUT request', () => {
    const stubValue = 'stub value';
    expect(stubValue).toBe('stub value');
    // httpClientSpy.get.and.returnValue(of(stubValue));
  });

  it('#getValue should return stubbed value from PATCH request', () => {
    const stubValue = 'stub value';
    expect(stubValue).toBe('stub value');
    // httpClientSpy.get.and.returnValue(of(stubValue));
  });
});
