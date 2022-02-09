import { waitForAsync, TestBed } from '@angular/core/testing';
import { AppServerModule } from './app.server.module';

describe('AppServerModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [AppServerModule],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(AppServerModule).toBeDefined();
  });
});
