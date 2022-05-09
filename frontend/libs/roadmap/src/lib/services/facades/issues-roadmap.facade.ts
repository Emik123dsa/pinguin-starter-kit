import { distinctUntilChanged, mergeMap, Observable } from 'rxjs';
import {
  IssuesFieldsFacade,
  IssuesFieldsMapper,
  IssuesLabelsFacade,
  IssuesLabelsMapper,
} from '@pinguin/issues';
import { Injectable } from '@angular/core';

import {
  IssueFieldEntities,
  IssueFieldEntity,
  IssueLabelEntities,
  IssueLabelEntity,
} from '@pinguin/api';
import { Dictionary } from '@ngrx/entity';

/**
 * Provide {@link IssuesRoadmapFacade} facade
 * for resolving `ids` of entities.
 *
 * @export
 * @class IssuesRoadmapFacade
 * @typedef {IssuesRoadmapFacade}
 */
@Injectable({
  providedIn: 'root',
})
export class IssuesRoadmapFacade {
  /**
   * Creates an instance of IssuesRoadmapFacade.
   * It will automatically parse and synchronously resolve
   * all of the issues ids of entities. Current facade will also help
   * to get all entities without their `ids` in the `eager` mode.
   *
   * @constructor
   * @public
   * @param {IssuesLabelsFacade} issuesLabelsFacade
   * @param {IssuesLabelsMapper} issuesLabelsMapper
   * @param {IssuesFieldsFacade} issuesFieldsFacade
   * @param {IssuesFieldsMapper} issuesFieldsMapper
   */
  public constructor(
    private readonly issuesLabelsFacade: IssuesLabelsFacade,
    private readonly issuesLabelsMapper: IssuesLabelsMapper,
    private readonly issuesFieldsFacade: IssuesFieldsFacade,
    private readonly issuesFieldsMapper: IssuesFieldsMapper,
  ) {}

  /**
   * Issues fields from the `Store` adapter.
   *
   * @public
   * @type {Observable<IssueFieldEntity[]>}
   */
  public issuesFields$: Observable<IssueFieldEntities> =
    this.issuesFieldsFacade.allIssuesFields$.pipe<IssueFieldEntities>(
      mergeMap((fields: IssueFieldEntities) => {
        const labels$: Observable<Dictionary<IssueLabelEntity>> =
          this.issuesLabelsFacade.issuesLabelEntities$;

        return this.issuesFieldsMapper.toEntities(fields, labels$);
      }),
    );

  /**
   * Issues labels from the `Store` adapter.
   *
   * @public
   * @type {Observable<IssueFieldEntity[]>}
   */
  public issuesLabels$: Observable<IssueLabelEntities> =
    this.issuesLabelsFacade.allIssuesLabels$.pipe(
      mergeMap((labels) => {
        const fields$: Observable<Dictionary<IssueFieldEntity>> =
          this.issuesFieldsFacade.issuesFieldEntities$;

        const fieldIds$: Observable<Array<string | number>> =
          this.issuesFieldsFacade.issuesFieldIds$;

        return this.issuesLabelsMapper.toEntities(labels, fields$, fieldIds$);
      }),
    );
}
