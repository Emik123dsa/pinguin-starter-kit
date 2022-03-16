import { Observable } from 'rxjs';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

import { IssueFieldEntities, IssueLabelEntities } from '@pinguin/api';

import { IssuesRoadmapFacade } from '../../services';
import { ISSUES_ROADMAP_FACADE_PROVIDER } from '../../providers';

@Component({
  selector: 'pinguin-issues-roadmap',
  exportAs: 'pinguinIssuesRoadmap',
  templateUrl: './issues-roadmap.component.html',
  styleUrls: ['./issues-roadmap.component.scss'],
  host: { 'class': 'pinguin-issues-roadmap' },
  viewProviders: [ISSUES_ROADMAP_FACADE_PROVIDER],
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
  public allIssuesLabels$!: Observable<IssueLabelEntities>;

  /**
   * Issues fields from the `Store`.
   *
   * @public
   * @type {!Observable<IssueFieldEntities>}
   */
  public allIssuesFields$!: Observable<IssueFieldEntities>;

  public constructor(private readonly facade: IssuesRoadmapFacade) {}

  /**
   * Initialize facade entities of `roadmap`.
   *
   * @public
   */
  public ngOnInit(): void {
    this.allIssuesFields$ = this.facade.allIssuesFields$;
    this.allIssuesLabels$ = this.facade.allIssuesLabels$;
  }
}
