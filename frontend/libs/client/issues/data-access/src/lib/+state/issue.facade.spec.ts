import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as IssueActions from './issue.actions';
import { IssueEffects } from './issue.effects';
import { IssueFacade } from './issue.facade';
import { IssueEntity } from './issue.models';
import {
  ISSUE_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './issue.reducer';
import * as IssueSelectors from './issue.selectors';

interface TestSchema {
  issue: State;
}

describe('IssueFacade', () => {
  let facade: IssueFacade;
  let store: Store<TestSchema>;
  const createIssueEntity = (id: string, name = ''): IssueEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(ISSUE_FEATURE_KEY, reducer),
          EffectsModule.forFeature([IssueEffects]),
        ],
        providers: [IssueFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(IssueFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allIssue$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allIssue$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadIssueSuccess` to manually update list
     */
    it('allIssue$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allIssue$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        IssueActions.loadIssueSuccess({
          issue: [createIssueEntity('AAA'), createIssueEntity('BBB')],
        }),
      );

      list = await readFirst(facade.allIssue$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
