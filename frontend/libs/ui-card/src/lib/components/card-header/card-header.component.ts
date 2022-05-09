import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ViewEncapsulation,
} from '@angular/core';

@Directive({
  selector:
    'pinguin-card-header-title, [pinguin-card-header-title], [pinguinCardHeaderTitle]',
  exportAs: 'pinguinCardHeaderTitle',
  host: { 'class': 'pinguin-card-header-title' },
})
export class CardHeaderTitleDirective {}

@Directive({
  selector:
    'pinguin-card-header-sub-title, [pinguin-card-header-sub-title], [pinguinCardHeaderSubTitle]',
  exportAs: 'pinguinCardHeaderSubTitle',
  host: { 'class': 'pinguin-card-header-sub-title' },
})
export class CardHeaderSubTitleDirective {}

@Component({
  selector: 'pinguin-card-header',
  exportAs: 'pinguinCardHeader',
  host: { 'class': 'pinguin-card-header' },
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardHeaderComponent {}
