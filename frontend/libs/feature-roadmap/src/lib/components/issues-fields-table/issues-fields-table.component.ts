import { Component, Input } from '@angular/core';
import { IssueFieldEntities, IssueFieldEntity } from '@pinguin/api';
import { IssueFieldDataSource } from '../../data';

@Component({
  selector: 'pinguin-issues-fields-table',
  templateUrl: './issues-fields-table.component.html',
  styleUrls: ['./issues-fields-table.component.scss'],
})
export class IssuesFieldsTableComponent {
  static ngAcceptInputType_fields: IssueFieldEntities;

  displayedColumns: string[] = ['id', 'labelIds'];

  dataSource: IssueFieldDataSource = new IssueFieldDataSource();

  @Input()
  set fields(value: IssueFieldEntities) {
    this._fields = value;
  }
  get fields(): IssueFieldEntities {
    return this._fields;
  }
  private _fields!: IssueFieldEntities;

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
