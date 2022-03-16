import {
  ChangeDetectionStrategy,
  ClassProvider,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { map, merge, Observable } from 'rxjs';
import { IssuesRoadmapFacade } from '@pinguin/feature-issues';

/**
 * Issues roadmap facade provided in view.
 *
 * @type {ClassProvider}
 */
const ISSUES_ROADMAP_FACADE_PROVIDER: ClassProvider = {
  multi: false,
  provide: IssuesRoadmapFacade,
  useClass: IssuesRoadmapFacade,
};

@Component({
  selector: 'pinguin-issues-container',
  exportAs: 'pinguinIssuesContainer',
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
   * Creates an instance of RoadmapPageComponent.
   *
   * @constructor
   * @public
   * @param {RoadmapPageFacade} facade
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
