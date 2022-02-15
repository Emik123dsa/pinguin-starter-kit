import { Injectable } from '@angular/core';
import {
  ApiGatewayService,
  IssuesFieldsEntity,
  IssuesLabelsEntity,
  IssuesService,
} from '@pinguin/api';

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
  public override findAllLabels(): Array<IssuesLabelsEntity> {
    return [];
  }

  /**
   * GET /api/v1/issues/{issueId}?/fields : get all labels of issues entity.
   *
   * @public
   * @abstract
   * @returns {Array<IssuesLabelsEntity>}
   */
  public override findAllFields(): Array<IssuesFieldsEntity> {
    return [];
  }
}
