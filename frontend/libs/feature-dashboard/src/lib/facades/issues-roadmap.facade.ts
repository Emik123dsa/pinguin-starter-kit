import { Injectable } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { IssuesFieldsEntity, IssuesLabelsEntity } from '@pinguin/api';
import {
  CoreEntityState,
  selectIssuesFieldEntities,
  selectIssuesLabelEntities,
} from '@pinguin/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IssuesRoadmapFacade {
  public issuesLabelEntities$: Observable<Dictionary<IssuesLabelsEntity>> =
    this.store.select(selectIssuesLabelEntities);

  public issuesFieldEntities$: Observable<Dictionary<IssuesFieldsEntity>> =
    this.store.select(selectIssuesFieldEntities);

  public constructor(private readonly store: Store<CoreEntityState>) {}
}
