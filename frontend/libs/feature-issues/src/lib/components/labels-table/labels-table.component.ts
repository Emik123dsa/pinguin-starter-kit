import { Component, Input } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { IssuesLabelEntity } from '@pinguin/api';

/**
 * Issues label entities of `Store` adapter.
 *
 * @typedef {IssuesLabelEntities}
 */
type IssuesLabelEntities = Dictionary<IssuesLabelEntity>;

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
}
