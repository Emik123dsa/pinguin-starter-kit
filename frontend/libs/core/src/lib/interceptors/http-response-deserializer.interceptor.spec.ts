import { TestBed } from '@angular/core/testing';

import { HttpResponseDeserializerInterceptor } from './http-response-deserializer.interceptor';

describe('HttpResponseDeserializerInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HttpResponseDeserializerInterceptor],
    }),
  );

  it('should be created', () => {
    const interceptor: HttpResponseDeserializerInterceptor = TestBed.inject(
      HttpResponseDeserializerInterceptor,
    );
    expect(interceptor).toBeTruthy();
  });
});
