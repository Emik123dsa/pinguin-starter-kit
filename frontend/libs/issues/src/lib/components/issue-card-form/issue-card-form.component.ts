import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pinguin-issue-card-form',
  exportAs: 'pinguinIssueCardForm',
  templateUrl: './issue-card-form.component.html',
  styleUrls: ['./issue-card-form.component.scss'],
  host: { 'class': 'pinguin-issue-card-form' },

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueCardFormComponent {}
