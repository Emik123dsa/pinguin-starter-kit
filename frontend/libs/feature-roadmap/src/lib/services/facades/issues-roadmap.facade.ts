import {
  concatAll,
  concatMap,
  concatMapTo,
  from,
  mergeMap,
  Observable,
  of,
  tap,
  toArray,
  withLatestFrom,
} from 'rxjs';
import {
  IssuesFieldsFacade,
  IssuesFieldsMapper,
  IssuesLabelsFacade,
  IssuesLabelsMapper,
} from '@pinguin/feature-issues';
import { Injectable } from '@angular/core';

import {
  IssueFieldEntities,
  IssueFieldEntity,
  IssueLabelEntities,
  IssueLabelEntity,
} from '@pinguin/api';
import { Dictionary } from '@ngrx/entity';

@Injectable({
  providedIn: 'any',
})
export class IssuesRoadmapFacade {
  /**
   * Creates an instance of IssuesRoadmapFacade.
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
  public fields$: Observable<IssueFieldEntities> =
    this.issuesFieldsFacade.all$.pipe<IssueFieldEntities>(
      mergeMap((fields: IssueFieldEntities) => {
        const labels$: Observable<Dictionary<IssueLabelEntity>> =
          this.issuesLabelsFacade.entities$;
        return this.issuesFieldsMapper.toEntities(fields, labels$);
      }),
    );

  /**
   * Issues labels from the `Store` adapter.
   *
   * @public
   * @type {Observable<IssueFieldEntity[]>}
   */
  public labels$: Observable<IssueLabelEntities> =
    this.issuesLabelsFacade.all$.pipe(
      mergeMap((labels) => {
        const fields$: Observable<Dictionary<IssueFieldEntity>> =
          this.issuesFieldsFacade.entities$;
        const fieldIds$: Observable<Array<string | number>> =
          this.issuesFieldsFacade.ids$;
        return this.issuesLabelsMapper.toEntities(labels, fields$, fieldIds$);
      }),
    );
}
