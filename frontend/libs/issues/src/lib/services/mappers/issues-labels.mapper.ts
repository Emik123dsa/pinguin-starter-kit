import { Injectable } from '@angular/core';
import { Dictionary } from '@ngrx/entity';

import {
  IssueFieldEntities,
  IssueFieldEntity,
  IssueLabelEntities,
  IssueLabelEntity,
} from '@pinguin/api';
import { assert, ObjectUtils, StringUtils } from '@pinguin/utils';
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
 * Issues labels mapper.
 *
 * @export
 * @class IssuesLabelsMapper
 * @typedef {IssuesLabelsMapper}
 */
@Injectable({
  providedIn: IssuesServiceModule,
})
export class IssuesLabelsMapper {
  /**
   * Mapping `IssueLabelEntity` to entity.
   *
   * @public
   * @param {IssueLabelEntities} labels
   * @param {Observable<Dictionary<IssueLabelEntity>>} fields$
   * @returns {Observable<IssueFieldEntities>}
   */
  public toEntities(
    labels: IssueLabelEntities,
    fields$: Observable<Dictionary<IssueFieldEntity>>,
    fieldIds$: Observable<Array<number | string>>,
  ): Observable<IssueLabelEntities> {
    const entities$ = ofEntities(labels).pipe(
      concatAll(),
      withLatestFrom(fields$, fieldIds$),
      concatMap(this.toIssueLabel(this)),
      toArray(),
    );

    return entities$;
  }

  /**
   * Mapping `IssueFieldDto` to label-entity.
   * 
   * @private
   * @param {OmitThisParameter<IssuesLabelsMapper>} self
   * @returns {([entity, entities]: [
      IssueFieldEntity,
      Dictionary<IssueLabelEntity>,
    ]) => Observable<IssueFieldEntity>}
   */
  private toIssueLabel(
    self: OmitThisParameter<IssuesLabelsMapper>,
  ): ([entity, entities, entityIds]: [
    IssueLabelEntity,
    Dictionary<IssueFieldEntity>,
    Array<number | string>,
  ]) => Observable<IssueLabelEntity> {
    return ([entity, entities, entityIds]: [
      IssueLabelEntity,
      Dictionary<IssueFieldEntity>,
      Array<number | string>,
    ]) => {
      const labelEntity: IssueLabelEntity = entity.clone();

      const labelEntity$: Observable<IssueLabelEntity> = fromEntities(
        entityIds,
      ).pipe(
        self.toIssueFields(entity, entities),
        tap((fields: IssueFieldEntities) => {
          const fieldIds: number[] = new Array<number>();
          for (const field of fields) fieldIds.push(field.getId());
          <void>labelEntity.setFieldIds(fieldIds);
        }),
        tap((fields: IssueFieldEntities) => labelEntity.setFields(fields)),
        mapTo(labelEntity),
      );

      return labelEntity$;
    };
  }

  /**
   * Mapping `IssueLabelDto` to field-entity.
   *
   * @private
   * @param {Dictionary<IssueLabelEntity>} entities
   * @returns {OperatorFunction<number, IssueLabelEntity[]>}
   */
  private toIssueFields(
    entity: IssueLabelEntity,
    entities: Dictionary<IssueFieldEntity>,
  ): OperatorFunction<string | number, IssueFieldEntities> {
    return pipe(
      reduce((accumulator: IssueFieldEntity[], entityId: string | number) => {
        const fieldEntity: IssueFieldEntity | undefined =
          entities && entities[entityId]?.clone();

        assert(
          ObjectUtils.nonNull(fieldEntity),
          StringUtils.format(
            '{0} can not be null/empty',
            IssueFieldEntity.name,
          ),
        );

        if (fieldEntity) {
          const labelId: number = entity.getId();
          const labelIds: number[] = fieldEntity.getLabelIds();

          assert(
            fieldEntity.getId() === entityId,
            StringUtils.format(
              '{0} id should be equaled to entityId',
              IssueFieldEntity.name,
            ),
          );

          if (labelIds.includes(labelId)) {
            <void>fieldEntity.setLabels([entity]);
            <void>fieldEntity.setLabelIds([labelId]);
            accumulator.push(fieldEntity);
          }
        }

        return accumulator;
      }, new Array<IssueFieldEntity>()),
    );
  }
}
