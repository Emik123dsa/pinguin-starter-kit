import { map, merge, Observable, tap } from 'rxjs';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

import { IssueFieldEntities, IssueLabelEntities } from '@pinguin/api';
import { IssuesRoadmapFacade } from '../../services';

@Component({
  selector: 'pinguin-issues-roadmap-page',
  exportAs: 'pinguinIssuesRoadmapContainer',
  host: { 'class': 'issues-roadmap-container' },
  templateUrl: './issues-roadmap.component.html',
  styleUrls: ['./issues-roadmap.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssuesRoadmapContainerComponent implements OnInit {
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
    this.issuesLabels$ = this.issuesRoadmapFacade.issuesLabels$;
    this.issuesFields$ = this.issuesRoadmapFacade.issuesFields$;
    this.issuesFieldTotal$ = this.issuesFieldsFacade.issuesFieldTotal$;
    this.issuesFieldsLoaded$ = this.issuesFieldsFacade.issuesFieldsLoaded$;
    this.issuesFieldsLoading$ = this.issuesFieldsFacade.issuesFieldsLoading$;
  }

  /**
   * Whether issues fields being validated commonly.
   *
   * @public
   * @readonly
   * @type {*}
   */
  public get issuesFieldsValidated$(): Observable<boolean> {
    const fieldsValidated$: Observable<boolean> = merge(
      this.issuesFieldsLoaded$,
      this.issuesFieldTotal$.pipe(map((total: number) => !!total)),
    );
    return fieldsValidated$;
  }
}
