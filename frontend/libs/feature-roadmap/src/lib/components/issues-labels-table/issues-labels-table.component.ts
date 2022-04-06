import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

import { IssueLabelEntities, IssueLabelEntity } from '@pinguin/api';
import { IssuesLabelsDataSource } from '@pinguin/feature-issues';

@Component({
  selector: 'pinguin-issues-labels-table',
  exportAs: 'pinguinIssuesLabelsTable',
  host: { 'class': 'issues-labels-table' },
  templateUrl: './issues-labels-table.component.html',
  styleUrls: ['./issues-labels-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssuesLabelsTableComponent implements OnInit {
  static ngAcceptInputType_labels: IssueLabelEntities;

  public displayedColumns: string[] = ['id', 'name', 'fields'];

  public dataSource!: IssuesLabelsDataSource;

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
