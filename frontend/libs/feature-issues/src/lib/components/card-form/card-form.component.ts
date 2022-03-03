import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pinguin-issues-card-form',
  exportAs: 'pinguinIssuesCardForm',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
  host: { 'class': 'pinguin-issues-card-form' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFormComponent {}
