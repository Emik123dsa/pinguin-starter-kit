import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DashboardLayoutEffects } from './dashboard-layout.effects';

describe('DashboardLayoutEffects', () => {
  let actions$: Observable<any>;
  let effects: DashboardLayoutEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardLayoutEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(DashboardLayoutEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
