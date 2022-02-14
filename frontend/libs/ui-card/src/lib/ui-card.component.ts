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
  selector: 'pinguin-ui-card',
  exportAs: 'pinguinUiCard',
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.scss'],
  host: { 'class': 'pinguin-ui-card' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCardComponent {
  @HostBinding('class._pinguin-animation-noopable')
  public get noopable() {
    return Object.is(this.animationMode, 'NoopAnimations');
  }

  public constructor(
    @Optional()
    @Inject(ANIMATION_MODULE_TYPE)
    public readonly animationMode?: string,
  ) {}
}
