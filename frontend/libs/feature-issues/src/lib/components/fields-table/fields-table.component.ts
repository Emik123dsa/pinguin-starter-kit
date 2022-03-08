import { Component, Input } from '@angular/core';
import { IssuesFieldEntities } from '@pinguin/api';

@Component({
  selector: 'pinguin-issues-fields-table',
  templateUrl: './fields-table.component.html',
  styleUrls: ['./fields-table.component.scss'],
})
export class FieldsTableComponent {
  static ngAcceptInputType_fields: IssuesFieldEntities;

  @Input()
  set fields(value: IssuesFieldEntities) {
    this._fields = value;
  }
  get fields(): IssuesFieldEntities {
    return this._fields;
  }
  private _fields!: IssuesFieldEntities;
}
