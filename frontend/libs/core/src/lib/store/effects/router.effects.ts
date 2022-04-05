import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import {
  Actions,
  createEffect,
  CreateEffectMetadata,
  ofType,
} from '@ngrx/effects';

import { Observable, pluck, tap } from 'rxjs';
import { RouterActions, RouterTypeActions } from '../actions';

@Injectable({
  providedIn: 'root',
})
export class RouterEffects {
  /**
   * Creates an instance of RouteEffects.
   *
   * @constructor
   * @param {Router} router
   * @param {Actions} actions$
   */
  public constructor(
    private readonly router: Router,
    private readonly actions$: Actions,
  ) {}

  navigateByUrl$: Observable<string | UrlTree> & CreateEffectMetadata =
    createEffect(
      (): Observable<string | UrlTree> =>
        this.actions$.pipe(
          ofType<RouterTypeActions>(RouterActions.navigateByUrl),
          pluck('url'),
          tap((baseUrl: string | UrlTree) =>
            this.router.navigateByUrl(baseUrl, {
              skipLocationChange: false,
              replaceUrl: true,
            }),
          ),
        ),
      {
        dispatch: false,
      },
    );
}
