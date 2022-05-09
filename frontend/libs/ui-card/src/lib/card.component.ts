import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Inject,
  Optional,
  ViewEncapsulation,
} from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

@Component({
  selector: 'pinguin-card',
  exportAs: 'pinguinCard',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: { 'class': 'pinguin-card pinguin-focus-indicator' },

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @HostBinding('class.pinguin-animation-noopable')
  public get noopable() {
    return Object.is(this.animationMode, 'NoopAnimations');
  }

  public constructor(
    @Optional()
    @Inject(ANIMATION_MODULE_TYPE)
    public readonly animationMode?: string,
  ) {}
}
