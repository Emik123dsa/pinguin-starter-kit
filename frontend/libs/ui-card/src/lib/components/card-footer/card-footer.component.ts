import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: `pinguin-card-footer, [pinguin-card-footer], [pinguinCardFooter]`,
  exportAs: 'pinguinCardFooter',
  host: { 'class': 'pinguin-card-footer' },
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFooterComponent {}
