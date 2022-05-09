import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as IssueLabelActions from './issue-label.actions';
import { IssueLabelEffects } from './issue-label.effects';
import { IssueLabelFacade } from './issue-label.facade';
import { IssueLabelEntity } from './issue-label.models';
import {
  ISSUE_LABEL_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './issue-label.reducer';
import * as IssueLabelSelectors from './issue-label.selectors';

interface TestSchema {
  issueLabel: State;
}

describe('IssueLabelFacade', () => {
  let facade: IssueLabelFacade;
  let store: Store<TestSchema>;
  const createIssueLabelEntity = (id: string, name = ''): IssueLabelEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(ISSUE_LABEL_FEATURE_KEY, reducer),
          EffectsModule.forFeature([IssueLabelEffects]),
        ],
        providers: [IssueLabelFacade],
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
      facade = TestBed.inject(IssueLabelFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allIssueLabel$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allIssueLabel$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadIssueLabelSuccess` to manually update list
     */
    it('allIssueLabel$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allIssueLabel$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        IssueLabelActions.loadIssueLabelSuccess({
          issueLabel: [
            createIssueLabelEntity('AAA'),
            createIssueLabelEntity('BBB'),
          ],
        }),
      );

      list = await readFirst(facade.allIssueLabel$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
