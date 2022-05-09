import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

import { IssueLabelEntities, IssueLabelEntity } from '@pinguin/api';
import { IssuesLabelsDataSource } from '@pinguin/issues';

@Component({
  selector: 'pinguin-issues-labels-table',
  exportAs: 'pinguinIssuesLabelsTable',
  host: { 'class': 'issues-labels-table' },
  templateUrl: './issues-labels-table.component.html',
  styleUrls: ['./issues-labels-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssuesLabelsTableComponent implements OnInit {
  static ngAcceptInputType_labels: IssueLabelEntities;

  public dataSource!: IssuesLabelsDataSource;

  public displayedColumns: string[] = ['id', 'name', 'fields'];

  @Input()
  set labels(value: IssueLabelEntities) {
    this.labelList = value;
  }
  get labels(): IssueLabelEntities {
    return this.labelList;
  }
  private labelList!: IssueLabelEntities;

  public ngOnInit() {
    this.dataSource = new IssuesLabelsDataSource();
    this.dataSource.setLabels(this.labelList);
  }

  /**
   * Whether entity was tracked with their `ids`
   * or non-nullable index.
   *
   * @public
   * @param {number} index
   * @param {IssueLabelEntity} entity
   * @returns {number}
   */
  public trackById(index: number, entity: IssueLabelEntity): number {
    return entity.getId() || index;
  }
}
