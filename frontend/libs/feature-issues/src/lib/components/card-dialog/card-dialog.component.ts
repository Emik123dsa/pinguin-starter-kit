import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pinguin-issues-card-dialog',
  exportAs: 'pinguinIssuesCardDialog',
  host: { 'class': 'pinguin-issues-card-dialog' },
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDialogComponent {}
