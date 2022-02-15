import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { IssuesFieldsEffects } from './issues-fields.effects';

describe('IssuesFieldsEffects', () => {
  let actions$: Observable<any>;
  let effects: IssuesFieldsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssuesFieldsEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(IssuesFieldsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
