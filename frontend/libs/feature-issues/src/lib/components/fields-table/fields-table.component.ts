import { Component, Input } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { IssuesFieldEntity } from '@pinguin/api';

/**
 * Issues field entities of `Store` adapter.
 *
 * @typedef {IssuesFieldEntities}
 */
type IssuesFieldEntities = Dictionary<IssuesFieldEntity>;

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
