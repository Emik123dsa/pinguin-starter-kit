import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as IssueFieldActions from './issue-field.actions';
import { IssueFieldEffects } from './issue-field.effects';
import { IssueFieldFacade } from './issue-field.facade';
import { IssueFieldEntity } from './issue-field.models';
import {
  ISSUE_FIELD_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './issue-field.reducer';
import * as IssueFieldSelectors from './issue-field.selectors';

interface TestSchema {
  issueField: State;
}

describe('IssueFieldFacade', () => {
  let facade: IssueFieldFacade;
  let store: Store<TestSchema>;
  const createIssueFieldEntity = (id: string, name = ''): IssueFieldEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(ISSUE_FIELD_FEATURE_KEY, reducer),
          EffectsModule.forFeature([IssueFieldEffects]),
        ],
        providers: [IssueFieldFacade],
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
      facade = TestBed.inject(IssueFieldFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allIssueField$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allIssueField$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadIssueFieldSuccess` to manually update list
     */
    it('allIssueField$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allIssueField$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        IssueFieldActions.loadIssueFieldSuccess({
          issueField: [
            createIssueFieldEntity('AAA'),
            createIssueFieldEntity('BBB'),
          ],
        }),
      );

      list = await readFirst(facade.allIssueField$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
