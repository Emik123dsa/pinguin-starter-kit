import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pinguin-issue-card-dialog',
  exportAs: 'pinguinIssueCardDialog',
  host: { 'class': 'pinguin-issue-card-dialog' },
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueCardDialogComponent {}
