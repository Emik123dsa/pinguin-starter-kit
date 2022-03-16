import { Component, Input } from '@angular/core';

import { IssueLabelEntities, IssueLabelEntity } from '@pinguin/api';

@Component({
  selector: 'pinguin-issues-labels-table',
  templateUrl: './issues-labels-table.component.html',
  styleUrls: ['./issues-labels-table.component.scss'],
})
export class IssuesLabelsTableComponent {
  static ngAcceptInputType_labels: IssueLabelEntities;

  @Input()
  set labels(value: IssueLabelEntities) {
    this._labels = value;
  }
  get labels(): IssueLabelEntities {
    return this._labels;
  }
  private _labels!: IssueLabelEntities;

  /**
   * Whether entity was tracked with their ids.
   *
   * @public
   * @param {number} index
   * @param {IssueLabelEntity} entity
   * @returns {number}
   */
  public trackByFn(index: number, entity: IssueLabelEntity): number {
    return entity.getId() || index;
  }
}
