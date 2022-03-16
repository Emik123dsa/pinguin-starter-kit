import { Observable } from 'rxjs';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { IssueFieldEntities, IssueLabelEntities } from '@pinguin/api';
import { IssuesRoadmapFacade } from '@pinguin/feature-issues';

@Component({
  selector: 'pinguin-issues-roadmap',
  exportAs: 'pinguinIssuesRoadmapTable',
  templateUrl: './issues-roadmap.component.html',
  styleUrls: ['./issues-roadmap.component.scss'],
  host: { 'class': 'pinguin-issues-roadmap' },
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
