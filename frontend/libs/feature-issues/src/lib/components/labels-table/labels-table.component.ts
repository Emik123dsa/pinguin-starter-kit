import { Component, Input } from '@angular/core';

import { IssuesLabelEntities, IssuesLabelEntity } from '@pinguin/api';

@Component({
  selector: 'pinguin-issues-labels-table',
  templateUrl: './labels-table.component.html',
  styleUrls: ['./labels-table.component.scss'],
})
export class LabelsTableComponent {
  static ngAcceptInputType_labels: IssuesLabelEntities;

  @Input()
  set labels(value: IssuesLabelEntities) {
    this._labels = value;
  }
  get labels(): IssuesLabelEntities {
    return this._labels;
  }
  private _labels!: IssuesLabelEntities;

  /**
   * Whether entity was tracked with their ids.
   *
   * @public
   * @param {number} index
   * @param {IssuesLabelEntity} entity
   * @returns {number}
   */
  public trackByFn(index: number, entity: IssuesLabelEntity): number {
    return entity.getId() || index;
  }
}
