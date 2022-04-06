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
  templateUrl: './issues-roadmap.component.html',
  styleUrls: ['./issues-roadmap.component.scss'],
  viewProviders: [IssuesRoadmapFacade],
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
  public labels$!: Observable<IssueLabelEntities>;

  /**
   * Issues fields from the `Store`.
   *
   * @public
   * @type {!Observable<IssueFieldEntities>}
   */
  public fields$!: Observable<IssueFieldEntities>;

  /**
   * Creates an instance of IssuesRoadmapContainerComponent.
   *
   * @constructor
   * @public
   * @param {IssuesRoadmapFacade} roadmapFacade
   */
  public constructor(private readonly roadmapFacade: IssuesRoadmapFacade) {}

  /**
   * Initialize facade entities of `roadmap`.
   *
   * @public
   */
  public ngOnInit(): void {
    this.labels$ = this.roadmapFacade.labels$;
    this.fields$ = this.roadmapFacade.fields$;
  }
}
