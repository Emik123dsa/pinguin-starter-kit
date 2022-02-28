import { Observable } from 'rxjs';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { IssuesFieldsEntity, IssuesLabelsEntity } from '@pinguin/api';

import { IssuesRoadmapFacade } from '../../facades';

@Component({
  selector: 'pinguin-issues-roadmap',
  exportAs: 'pinguinIssuesRoadmap',
  templateUrl: './issues-roadmap.component.html',
  styleUrls: ['./issues-roadmap.component.scss'],
  host: { 'class': 'pinguin-issues-roadmap' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssuesRoadmapComponent implements OnInit {
  /**
   * Issues Label Entities from the `Store`.
   *
   * @public
   * @type {!Observable<Dictionary<IssuesLabelsEntity>>}
   */
  public issuesLabelEntities$!: Observable<Dictionary<IssuesLabelsEntity>>;

  /**
   * Issues Field Entities from the `Store`.
   *
   * @public
   * @type {!Observable<Dictionary<IssuesFieldsEntity>>}
   */
  public issuesFieldEntities$!: Observable<Dictionary<IssuesFieldsEntity>>;

  /**
   * Creates an instance of IssuesRoadmapComponent.
   *
   * @constructor
   * @public
   * @param {IssuesRoadmapFacade} facade
   */
  public constructor(private readonly facade: IssuesRoadmapFacade) {}

  /**
   * Initialize issues fields entities.
   *
   * @public
   */
  public ngOnInit(): void {
    this.issuesFieldEntities$ = this.facade.issuesFieldEntities$;
    this.issuesLabelEntities$ = this.facade.issuesLabelEntities$;
  }
}
