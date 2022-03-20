import { Injectable } from '@angular/core';
import {
  IssuesService,
  ApiGatewayService,
  IssueFieldEntity,
  IssueLabelEntities,
  IssueLabelEntity,
  IssueFieldEntities,
} from '@pinguin/api';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'platform',
})
export class RxIssueService extends IssuesService {
  /**
   * Creates an instance of RxIssueService.
   *
   * @constructor
   * @public
   * @param {ApiGatewayService} apiGatewayService
   */
  public constructor(private readonly apiGatewayService: ApiGatewayService) {
    super();
  }

  /**
   * GET /api/v1/issues/{issueId}/labels : get all labels of issues entity.
   *
   * @public
   * @abstract
   * @returns {Array<IssueLabelEntity>}
   */
  public override findAllLabels(): Observable<IssueLabelEntities> {
    return of(
      new Array<IssueLabelEntity>(
        new IssueLabelEntity(1, 'Frontend'),
        new IssueLabelEntity(2, 'Security'),
        new IssueLabelEntity(3, 'Backend'),
      ),
    );
  }

  /**
   * GET /api/v1/issues/{issueId}/fields : get all labels of issues entity.
   *
   * @public
   * @abstract
   * @returns {Array<IssueLabelEntity>}
   */
  public override findAllFields(): Observable<IssueFieldEntities> {
    return of(
      new Array<IssueFieldEntity>(
        new IssueFieldEntity(
          1,
          'Quick try on DB',
          'One morning, when Gregor Samsa woke from troubled dreams.',
          [1, 3],
          1641164400,
          1641164400,
        ),
        new IssueFieldEntity(
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
