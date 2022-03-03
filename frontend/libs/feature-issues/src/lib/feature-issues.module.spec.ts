import { TestBed } from '@angular/core/testing';

import { FeatureIssuesModule } from './feature-issues.module';
describe('FeatureIssuesModule', () => {
  let facade: FeatureIssuesModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureIssuesModule],
    });

    facade = TestBed.inject(FeatureIssuesModule);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });
});
