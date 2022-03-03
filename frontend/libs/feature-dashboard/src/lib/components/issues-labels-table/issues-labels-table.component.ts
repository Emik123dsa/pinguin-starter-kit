import { Component, Input, OnInit } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { IssuesLabelEntity } from '@pinguin/api';

/**
 * `Store` adapter entities of issues label.
 *
 * @typedef {IssuesLabelEntities}
 */
type IssuesLabelEntities = Dictionary<IssuesLabelEntity>;

@Component({
  selector: 'pinguin-issues-labels-table',
  templateUrl: './issues-labels-table.component.html',
  styleUrls: ['./issues-labels-table.component.scss'],
})
export class IssuesLabelsTableComponent {
  static ngAcceptInputType_issuesLabels: IssuesLabelEntities;

  @Input()
  set issuesLabels(value: IssuesLabelEntities) {
    this._issuesLabels = value;
  }
  get issuesLabel(): IssuesLabelEntities {
    return this._issuesLabels;
  }
  private _issuesLabels!: IssuesLabelEntities;
}
