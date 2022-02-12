import { Directive } from '@angular/core';

@Directive({
  selector: 'button[pinguinUiButton]',
  exportAs: 'pinguinUiButton',
})
export class UiButtonDirective {}
