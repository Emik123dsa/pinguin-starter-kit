import { map, merge, Observable } from 'rxjs';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

import { IssuesFieldsFacade } from '@pinguin/feature-issues';

@Component({
  selector: 'pinguin-issues-roadmap-container',
  exportAs: 'pinguinIssuesRoadmapContainer',
  templateUrl: './issues-roadmap-container.component.html',
  styleUrls: ['./issues-roadmap-container.component.scss'],
  host: { 'class': 'issues-roadmap-page' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssuesRoadmapContainerComponent implements OnInit {
  /**
   * Issues field total from the `Store` adapter.
   *
   * @type {!Observable<number>}
   */
  public fieldTotal$!: Observable<number>;

  /**
   * Issues fields loading state from the `Store` adapter.
   *
   * @type {!Observable<boolean>}
   */
  public fieldsLoading$!: Observable<boolean>;

  /**
   * Issues fields loaded state from the `Store` adapter.
   *
   * @type {!Observable<boolean>}
   */
  public fieldsLoaded$!: Observable<boolean>;

  /**
   * Creates an instance of IssuesRoadmapContainerComponent.
   *
   * @constructor
   * @public
   * @param {IssuesRoadmapFacade} fieldsFacade
   */
  public constructor(private readonly fieldsFacade: IssuesFieldsFacade) {}

  /**
   * Initialize facade entities of `roadmap`.
   *
   * @public
   */
  public ngOnInit(): void {
    this.fieldTotal$ = this.fieldsFacade.total$;
    this.fieldsLoaded$ = this.fieldsFacade.loaded$;
    this.fieldsLoading$ = this.fieldsFacade.loading$;
  }

  /**
   * Whether issues fields being validated commonly.
   *
   * @public
   * @readonly
   * @type {*}
   */
  public get fieldsValidated$(): Observable<boolean> {
    const fields$: Observable<boolean> = merge(
      this.fieldsLoaded$,
      this.fieldTotal$.pipe(map((total: number) => !!total)),
    );
    return fields$;
  }
}
