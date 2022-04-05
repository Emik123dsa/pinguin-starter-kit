import { Component, Input, OnInit } from '@angular/core';
import { IssueFieldEntities, IssueFieldEntity } from '@pinguin/api';
import { IssuesFieldsDataSource } from '@pinguin/feature-issues';

@Component({
  selector: 'pinguin-issues-fields-table',
  templateUrl: './issues-fields-table.component.html',
  styleUrls: ['./issues-fields-table.component.scss'],
})
export class IssuesFieldsTableComponent implements OnInit {
  static ngAcceptInputType_fields: IssueFieldEntities;

  public displayedColumns: string[] = ['id', 'labelIds'];

  public dataSource!: IssuesFieldsDataSource;

  @Input()
  set fields(value: IssueFieldEntities) {
    this.fieldList = value;
  }
  get fields(): IssueFieldEntities {
    return this.fieldList;
  }
  private fieldList!: IssueFieldEntities;

  public ngOnInit(): void {
    this.dataSource = new IssuesFieldsDataSource();
    this.dataSource.setFields(this.fieldList);
  }

  /**
   * Whether entity was tracked with their ids.
   *
   * @public
   * @param {number} index
   * @param {IssueLabelEntity} entity
   * @returns {number}
   */
  public trackEntityById(index: number, entity: IssueFieldEntity): number {
    return entity.getId() || index;
  }
}
