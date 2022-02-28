import { Injectable } from '@angular/core';
import {
  ApiGatewayService,
  IssuesFieldsEntity,
  IssuesLabelsEntity,
  IssuesService,
} from '@pinguin/api';

import { debounceTime, delay, Observable, of, throttle } from 'rxjs';

@Injectable({
  providedIn: 'root',
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
   * @returns {Array<IssuesLabelsEntity>}
   */
  public override findAllLabels(): Observable<Array<IssuesLabelsEntity>> {
    return of(
      new Array<IssuesLabelsEntity>(
        new IssuesLabelsEntity(1, 'Frontend'),
        new IssuesLabelsEntity(2, 'Security'),
        new IssuesLabelsEntity(3, 'Backend'),
      ),
    );
  }

  /**
   * GET /api/v1/issues/{issueId}?/fields : get all labels of issues entity.
   *
   * @public
   * @abstract
   * @returns {Array<IssuesLabelsEntity>}
   */
  public override findAllFields(): Observable<Array<IssuesFieldsEntity>> {
    return of(
      new Array<IssuesFieldsEntity>(
        new IssuesFieldsEntity(
          1,
          'Quick try on DB',
          'One morning, when Gregor Samsa woke from troubled dreams.',
          [1, 3],
          1641164400,
          1641164400,
        ),
        new IssuesFieldsEntity(
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
