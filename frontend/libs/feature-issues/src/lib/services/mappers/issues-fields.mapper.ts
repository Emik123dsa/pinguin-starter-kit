import { Injectable } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import {
  IssueFieldEntities,
  IssueFieldEntity,
  IssueLabelEntities,
  IssueLabelEntity,
} from '@pinguin/api';
import { ObjectUtils, StringUtils } from '@pinguin/utils';
import {
  concatAll,
  concatMap,
  from as fromEntities,
  mapTo,
  Observable,
  of as ofEntities,
  OperatorFunction,
  pipe,
  reduce,
  tap,
  toArray,
  withLatestFrom,
} from 'rxjs';
import { IssuesServiceModule } from '../issues-service.module';

/**
 * Issues fields mapper.
 *
 * @export
 * @class IssuesFieldsMapper
 * @typedef {IssuesFieldsMapper}
 */
@Injectable({
  providedIn: IssuesServiceModule,
})
export class IssuesFieldsMapper {
  /**
   * Map `IssueFieldDto` to entity-scheme.
   *
   * @public
   * @param {Observable<Dictionary<IssueLabelEntity>>} labelEntities$
   * @returns {*}
   */
  public toEntities(
    fields: IssueFieldEntities,
    labels$: Observable<Dictionary<IssueLabelEntity>>,
  ): Observable<IssueFieldEntities> {
    const entities$ = ofEntities(fields).pipe(
      concatAll(),
      withLatestFrom(labels$),
      concatMap(this.toIssueField(this)),
      toArray(),
    );

    return entities$;
  }

  /**
   * Override `IssueFieldDto` to label-entities.
   * 
   * @private
   * @param {OmitThisParameter<this>} this
   * @returns {([entity, entities]: [
      IssueFieldEntity,
      Dictionary<IssueLabelEntity>,
    ]) => Observable<IssueFieldEntity>}
   */
  private toIssueField(
    self: OmitThisParameter<IssuesFieldsMapper>,
  ): ([entity, entities]: [
    IssueFieldEntity,
    Dictionary<IssueLabelEntity>,
  ]) => Observable<IssueFieldEntity> {
    return ([entity, entities]: [
      IssueFieldEntity,
      Dictionary<IssueLabelEntity>,
    ]) => {
      const fieldEntity: IssueFieldEntity = entity.clone();
      const labelIds: ReadonlyArray<number> = entity.getLabelIds();

      const fieldEntity$: Observable<IssueFieldEntity> = fromEntities(
        labelIds,
      ).pipe(
        self.toIssueLabels(entities),
        tap((labels: IssueLabelEntities) => fieldEntity.setLabels(labels)),
        mapTo(fieldEntity),
      );

      return fieldEntity$;
    };
  }

  /**
   * Mapping `IssueLabelDto` to entity.
   *
   * @private
   * @param {Dictionary<IssueLabelEntity>} entities
   * @returns {OperatorFunction<number, IssueLabelEntity[]>}
   */
  private toIssueLabels(
    entities: Dictionary<IssueLabelEntity>,
  ): OperatorFunction<number, IssueLabelEntities> {
    return pipe(
      reduce((accumulator: IssueLabelEntities, entityId: number) => {
        // Clone current `IssueLabelEntity` stream to the field entities.
        const currentEntity: IssueLabelEntity | undefined =
          entities && entities[entityId];

        console.assert(
          ObjectUtils.nonNull(currentEntity),
          StringUtils.format(
            '{0} can not be null/empty',
            IssueFieldEntity.name,
          ),
        );

        console.assert(
          currentEntity && currentEntity.getId() === entityId,
          StringUtils.format(
            '{0} id should be equaled to entityId',
            IssueFieldEntity.name,
          ),
        );

        if (currentEntity) accumulator.push(currentEntity);

        return accumulator;
      }, new Array<IssueLabelEntity>()),
    );
  }
}
