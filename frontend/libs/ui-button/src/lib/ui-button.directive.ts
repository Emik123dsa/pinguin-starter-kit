import { Directive } from '@angular/core';

@Directive({
  selector: 'button[pinguin-ui-button], button[pinguinUiButton]',
  host: { 'class': 'pinguin-ui-button pinguin-ui-focus-indicator' },
  exportAs: 'pinguinUiButton',
})
export class UiButtonDirective {}

@Directive({
  selector: 'a[pinguin-ui-button], a[pinguinUiButton]',
  exportAs: 'pinguinUiButton, pinguinUiAnchor',
})
export class UiAnchorDirective extends UiButtonDirective {}
