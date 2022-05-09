import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pinguin-issue-card-dialog',
  exportAs: 'pinguinIssueCardDialog',
  host: { 'class': 'pinguin-issue-card-dialog' },
  templateUrl: './issue-card-dialog.component.html',
  styleUrls: ['./issue-card-dialog.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueCardDialogComponent {}
