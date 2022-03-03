import { Observable } from 'rxjs';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { IssuesFieldEntity, IssuesLabelEntity } from '@pinguin/api';

import { RoadmapIssuesFacade } from '../../services/facades';

@Component({
  selector: 'pinguin-issues-roadmap',
  exportAs: 'pinguinIssuesRoadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss'],
  host: { 'class': 'pinguin-issues-roadmap' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoadmapComponent implements OnInit {
  /**
   * Issues Label Entities from the `Store`.
   *
   * @public
   * @type {!Observable<Dictionary<IssuesLabelEntity>>}
   */
  public issuesLabelEntities$!: Observable<Dictionary<IssuesLabelEntity>>;

  /**
   * Issues Field Entities from the `Store`.
   *
   * @public
   * @type {!Observable<Dictionary<IssuesFieldEntity>>}
   */
  public issuesFieldEntities$!: Observable<Dictionary<IssuesFieldEntity>>;

  /**
   * Creates an instance of IssuesRoadmapComponent.
   *
   * @constructor
   * @public
   * @param {RoadmapIssuesFacade} facade
   */
  public constructor(private readonly facade: RoadmapIssuesFacade) {}

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
