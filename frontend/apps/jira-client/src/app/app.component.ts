import { Component, Inject, OnInit } from '@angular/core';
import { ClientEnvironment, ENVIRONMENT } from '@pinguin/environment';
import { ClientWindow, WINDOW } from '@pinguin/common';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Route,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'pinguin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
