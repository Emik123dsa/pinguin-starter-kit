import { Injectable } from '@angular/core';
import {
  IssuesService,
  ApiGatewayService,
  IssuesFieldEntity,
  IssuesLabelEntities,
  IssuesLabelEntity,
  IssuesFieldEntities,
} from '@pinguin/api';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'platform',
})
export class RxIssuesService extends IssuesService {
  /**
   * Creates an instance of RxIssuesService.
   *
   * @constructor
   * @public
   * @param {ApiGatewayService} apiGatewayService
   */
  public constructor(private readonly apiGatewayService: ApiGatewayService) {
    super();
  }

  /**
   * GET /api/v1/issues/{issueId}?/labels : get all labels of issues entity.
   *
   * @public
   * @abstract
   * @returns {Array<IssuesLabelEntity>}
   */
  public override findAllLabels(): Observable<IssuesLabelEntities> {
    return of(
      new Array<IssuesLabelEntity>(
        new IssuesLabelEntity(1, 'Frontend'),
        new IssuesLabelEntity(2, 'Security'),
        new IssuesLabelEntity(3, 'Backend'),
      ),
    );
  }

  /**
   * GET /api/v1/issues/{issueId}?/fields : get all labels of issues entity.
   *
   * @public
   * @abstract
   * @returns {Array<IssuesLabelEntity>}
   */
  public override findAllFields(): Observable<IssuesFieldEntities> {
    return of(
      new Array<IssuesFieldEntity>(
        new IssuesFieldEntity(
          1,
          'Quick try on DB',
          'One morning, when Gregor Samsa woke from troubled dreams.',
          [1, 3],
          1641164400,
          1641164400,
        ),
        new IssuesFieldEntity(
          2,
          'Quick try on DB',
          'One morning, when Gregor Samsa woke from troubled dreams.',
          [1, 3],
          1641164400,
          1641164400,
        ),
      ),
    );
  }
}
