import { VERSION } from '@pinguin/core';
import { Component, Version } from '@angular/core';

@Component({
  selector: 'pinguin-jira-client-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * Version  of app component.
   */
  public version: Version = VERSION;
}
