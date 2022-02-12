import { Directive } from '@angular/core';

@Directive({
  selector: `input[pinguinUiInput], textarea[pinguinUiInput],
             input[pinguinUiNativeControl], textarea[pinguinUiInput]`,
  exportAs: 'pinguinUiInput',
  // host: {},
  //styleUrls: ['./input.component.scss'],
})
export class UiInputDirective {}
