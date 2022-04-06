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
   * @param {IssuesLabelsFacade} labelsFacade
   * @param {IssuesLabelsMapper} labelsMapper
   * @param {IssuesFieldsFacade} fieldsFacade
   * @param {IssuesFieldsMapper} fieldsMapper
   */
  public constructor(
    private readonly labelsFacade: IssuesLabelsFacade,
    private readonly labelsMapper: IssuesLabelsMapper,
    private readonly fieldsFacade: IssuesFieldsFacade,
    private readonly fieldsMapper: IssuesFieldsMapper,
  ) {}

  /**
   * Issues fields from the `Store` adapter.
   *
   * @public
   * @type {Observable<IssueFieldEntity[]>}
   */
  public fields$: Observable<IssueFieldEntities> =
    this.fieldsFacade.all$.pipe<IssueFieldEntities>(
      mergeMap((fields: IssueFieldEntities) => {
        const labels$: Observable<Dictionary<IssueLabelEntity>> =
          this.labelsFacade.entities$;
        return this.fieldsMapper.toEntities(fields, labels$);
      }),
    );

  /**
   * Issues labels from the `Store` adapter.
   *
   * @public
   * @type {Observable<IssueFieldEntity[]>}
   */
  public labels$: Observable<IssueLabelEntities> = this.labelsFacade.all$.pipe(
    mergeMap((labels) => {
      const fields$: Observable<Dictionary<IssueFieldEntity>> =
        this.fieldsFacade.entities$;
      const fieldIds$: Observable<Array<string | number>> =
        this.fieldsFacade.ids$;
      return this.labelsMapper.toEntities(labels, fields$, fieldIds$);
    }),
  );
}
