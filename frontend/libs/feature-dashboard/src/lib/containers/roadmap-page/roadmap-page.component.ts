import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { map, merge, Observable } from 'rxjs';

import { RoadmapPageFacade } from '../../facades';

@Component({
  selector: 'pinguin-roadmap-page',
  exportAs: 'pinguinRoadmapPage',
  templateUrl: './roadmap-page.component.html',
  styleUrls: ['./roadmap-page.component.scss'],
  host: { 'class': 'pinguin-roadmap-page' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoadmapPageComponent implements OnInit {
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
  public constructor(private readonly facade: RoadmapPageFacade) {}

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
