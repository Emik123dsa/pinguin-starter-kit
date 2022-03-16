import { Component, Input } from '@angular/core';
import { IssueFieldEntities } from '@pinguin/api';

@Component({
  selector: 'pinguin-issues-fields-table',
  templateUrl: './issues-fields-table.component.html',
  styleUrls: ['./issues-fields-table.component.scss'],
})
export class IssuesFieldsTableComponent {
  static ngAcceptInputType_fields: IssueFieldEntities;

  @Input()
  set fields(value: IssueFieldEntities) {
    this._fields = value;
  }
  get fields(): IssueFieldEntities {
    return this._fields;
  }
  private _fields!: IssueFieldEntities;
}
