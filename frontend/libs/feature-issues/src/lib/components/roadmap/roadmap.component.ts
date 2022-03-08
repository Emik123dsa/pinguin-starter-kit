import { Observable } from 'rxjs';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import {
  IssuesFieldEntities,
  IssuesFieldEntity,
  IssuesLabelEntities,
  IssuesLabelEntity,
} from '@pinguin/api';

import { IssuesRoadmapFacade } from '../../services/facades';

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
   * Issues labels from the `Store`.
   *
   * @public
   * @type {!Observable<IssuesLabelEntities>}
   */
  public allIssuesLabels$!: Observable<IssuesLabelEntities>;

  /**
   * Issues fields from the `Store`.
   *
   * @public
   * @type {!Observable<IssuesFieldEntities>}
   */
  public allIssuesFields$!: Observable<IssuesFieldEntities>;

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
    this.allIssuesFields$ = this.facade.allIssuesFields$;
    this.allIssuesLabels$ = this.facade.allIssuesLabels$;
  }
}
