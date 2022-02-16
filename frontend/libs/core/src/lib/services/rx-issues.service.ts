import { Injectable } from '@angular/core';
import {
  ApiGatewayService,
  IssuesFieldsEntity,
  IssuesLabelsEntity,
  IssuesService,
} from '@pinguin/api';

import { Observable, of } from 'rxjs';

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
    return of([]);
  }
}
