import { map, merge, Observable } from 'rxjs';
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
  selector: 'pinguin-issues-roadmap-container',
  exportAs: 'pinguinIssuesRoadmapContainer',
  templateUrl: './issues-roadmap-container.component.html',
  styleUrls: ['./issues-roadmap-container.component.scss'],
  host: { 'class': 'pinguin-issues-roadmap-container' },
  viewProviders: [ISSUES_ROADMAP_FACADE_PROVIDER],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssuesRoadmapContainerComponent implements OnInit {
  /**
   * Issues field total from the `Store` adapter.
   *
   * @type {!Observable<number>}
   */
  public issuesFieldTotal$!: Observable<number>;

  /**
   * Issues fields loading state from the `Store` adapter.
   *
   * @type {!Observable<boolean>}
   */
  public issuesFieldsLoading$!: Observable<boolean>;

  /**
   * Issues fields loaded state from the `Store` adapter.
   *
   * @type {!Observable<boolean>}
   */
  public issuesFieldsLoaded$!: Observable<boolean>;

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

  /**
   * Creates an instance of IssuesRoadmapContainerComponent.
   *
   * @constructor
   * @public
   * @param {IssuesRoadmapFacade} facade
   */
  public constructor(private readonly facade: IssuesRoadmapFacade) {}

  /**
   * Initialize facade entities of `roadmap`.
   *
   * @public
   */
  public ngOnInit(): void {
    this.issuesFieldTotal$ = this.facade.issuesFieldTotal$;
    this.issuesFieldsLoaded$ = this.facade.issuesFieldsLoaded$;
    this.issuesFieldsLoading$ = this.facade.issuesFieldsLoading$;

    this.allIssuesFields$ = this.facade.allIssuesFields$;
    this.allIssuesLabels$ = this.facade.allIssuesLabels$;
  }

  /**
   * Whether issues fields being validated commonly.
   *
   * @public
   * @readonly
   * @type {*}
   */
  public get issuesFieldsValidated$(): Observable<boolean> {
    const issuesFields$: Observable<boolean> = merge(
      this.issuesFieldsLoaded$,
      this.issuesFieldTotal$.pipe(map((total: number) => !!total)),
    );
    return issuesFields$;
  }
}
