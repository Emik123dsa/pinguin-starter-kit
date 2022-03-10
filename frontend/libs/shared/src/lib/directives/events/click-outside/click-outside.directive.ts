import { Directive } from '@angular/core';

@Directive({
  selector: '[pinguinClickOutside]',
  exportAs: 'pinguinClickOutside',
  host: { 'class': 'pinguin-click-outside' },
})
export class ClickOutsideDirective {
  // constructor() {}
}
