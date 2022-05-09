import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as IssuesActions from './issues.actions';
import { IssuesEffects } from './issues.effects';
import { IssuesFacade } from './issues.facade';
import { IssuesEntity } from './issues.models';
import {
  ISSUES_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './issues.reducer';
import * as IssuesSelectors from './issues.selectors';

interface TestSchema {
  issues: State;
}

describe('IssuesFacade', () => {
  let facade: IssuesFacade;
  let store: Store<TestSchema>;
  const createIssuesEntity = (id: string, name = ''): IssuesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(ISSUES_FEATURE_KEY, reducer),
          EffectsModule.forFeature([IssuesEffects]),
        ],
        providers: [IssuesFacade],
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
      facade = TestBed.inject(IssuesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allIssues$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allIssues$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadIssuesSuccess` to manually update list
     */
    it('allIssues$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allIssues$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        IssuesActions.loadIssuesSuccess({
          issues: [createIssuesEntity('AAA'), createIssuesEntity('BBB')],
        }),
      );

      list = await readFirst(facade.allIssues$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
