import { Observable, tap } from 'rxjs';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

import { IssueFieldEntities, IssueLabelEntities } from '@pinguin/api';

import { IssuesRoadmapFacade } from '../../services';

@Component({
  selector: 'pinguin-issues-roadmap',
  exportAs: 'pinguinIssuesRoadmap',
  host: { 'class': 'issues-roadmap' },
  viewProviders: [IssuesRoadmapFacade],
  templateUrl: './issues-roadmap.component.html',
  styleUrls: ['./issues-roadmap.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssuesRoadmapComponent implements OnInit {
  /**
   * Issues labels from the `Store`.
   *
   * @public
   * @type {!Observable<IssueLabelEntities>}
   */
  public issuesLabels$!: Observable<IssueLabelEntities>;

  /**
   * Issues fields from the `Store`.
   *
   * @public
   * @type {!Observable<IssueFieldEntities>}
   */
  public issuesFields$!: Observable<IssueFieldEntities>;

  /**
   * Creates an instance of IssuesRoadmapContainerComponent.
   *
   * @constructor
   * @public
   * @param {IssuesRoadmapFacade} issuesRoadmapFacade
   */
  public constructor(
    private readonly issuesRoadmapFacade: IssuesRoadmapFacade,
  ) {}

  /**
   * Initialize facade entities of `roadmap`.
   *
   * @public
   */
  public ngOnInit(): void {
    this.issuesLabels$ = this.issuesRoadmapFacade.labels$;
    this.issuesFields$ = this.issuesRoadmapFacade.fields$;
  }
}
