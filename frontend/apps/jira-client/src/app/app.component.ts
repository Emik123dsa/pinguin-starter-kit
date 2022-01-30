import { Component, Inject, OnInit } from '@angular/core';
import { ClientEnvironment, ENVIRONMENT } from '@pinguin/environment';
import { ClientWindow, WINDOW } from '@pinguin/common';

@Component({
  selector: 'pinguin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(WINDOW)
    public readonly window: ClientWindow
  ) {}

  ngOnInit(): void {
    console.log(this.window);
  }
}
