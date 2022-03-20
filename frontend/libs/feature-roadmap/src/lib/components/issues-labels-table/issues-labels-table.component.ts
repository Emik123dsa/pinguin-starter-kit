import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  LOCALE_ID,
  ViewEncapsulation,
} from '@angular/core';
import { IssueLabelEntities, IssueLabelEntity } from '@pinguin/api';
import { IssueLabelDataSource } from '../../data';

@Component({
  selector: 'pinguin-issues-labels-table',
  exportAs: 'pinguinIssuesLabelsTable',
  host: { 'class': 'issues-labels-table' },
  templateUrl: './issues-labels-table.component.html',
  styleUrls: ['./issues-labels-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssuesLabelsTableComponent {
  static ngAcceptInputType_labels: IssueLabelEntities;

  displayedColumns: string[] = ['id', 'name'];

  dataSource: IssueLabelDataSource = new IssueLabelDataSource();

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
  public trackEntityById(index: number, entity: IssueLabelEntity): number {
    return entity.getId() || index;
  }
}
