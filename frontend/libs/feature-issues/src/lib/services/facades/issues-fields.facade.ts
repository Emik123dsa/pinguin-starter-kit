import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Dictionary } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';

import { IssueFieldEntities, IssueFieldEntity } from '@pinguin/api';
import {
  CoreEntityState,
  selectAllIssuesFields,
  selectIssuesFieldEntities,
  selectIssuesFieldIds,
  selectIssuesFieldsLoaded,
  selectIssuesFieldsLoading,
  selectIssuesFieldTotal,
} from '@pinguin/core';
import { IssuesServiceModule } from '../issues-service.module';

@Injectable({
  providedIn: IssuesServiceModule,
})
export class IssuesFieldsFacade {
  /**
   * Issues fields loading state from the `Store` adapter.
   *
   * @public
   * @readonly
   * @type {Observable<boolean>}
   */
  public loading$: Observable<boolean> = this.store.select<boolean>(
    selectIssuesFieldsLoading,
  );

  /**
   * Issues fields loaded state from the `Store` adapter.
   *
   * @public
   * @readonly
   * @type {Observable<boolean>}
   */
  public loaded$: Observable<boolean> = this.store.select<boolean>(
    selectIssuesFieldsLoaded,
  );

  /**
   * Issues field total state from the `Store` adapter.
   *
   * @protected
   * @type {Observable<number>}
   */
  public total$: Observable<number> = this.store.select<number>(
    selectIssuesFieldTotal,
  );

  /**
   * Issues field ids from the `Store` adapter.
   *
   * @public
   * @type {(Observable<Array<string | number>>)}
   */
  public ids$: Observable<Array<string | number>> = this.store.pipe<
    Array<string | number>
  >(select(selectIssuesFieldIds));

  /**
   * Issues field entities from the `Store` adapter.
   *
   * @public
   * @type {Observable<Dictionary<IssueFieldEntity>>}
   */
  public entities$: Observable<Dictionary<IssueFieldEntity>> = this.store.pipe<
    Dictionary<IssueFieldEntity>
  >(select(selectIssuesFieldEntities));

  /**
   * Issues fields from the `Store` adapter.
   *
   * @public
   * @type {Observable<IssueFieldEntity[]>}
   */
  public all$: Observable<IssueFieldEntities> =
    this.store.pipe<IssueFieldEntities>(select(selectAllIssuesFields));

  /**
   * Creates an instance of IssuesRoadmapFacade.
   *
   * @constructor
   * @public
   * @param {Store<CoreEntityState>} store
   */
  public constructor(private readonly store: Store<CoreEntityState>) {}
}
