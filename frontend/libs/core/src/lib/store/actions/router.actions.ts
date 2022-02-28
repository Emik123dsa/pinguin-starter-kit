import { TypedAction } from '@ngrx/store/src/models';
import { createAction, ActionCreator, union, props } from '@ngrx/store';

import { RouterActionTypes } from '../constants';
import { UrlTree } from '@angular/router';

const navigateByUrl: ActionCreator<
  RouterActionTypes,
  (props: { url: string }) => {
    url: string | UrlTree;
  } & TypedAction<RouterActionTypes>
> = createAction(
  RouterActionTypes.Navigate,
  props<{
    url: string | UrlTree;
  }>(),
);

const routerActions = union({
  navigateByUrl,
});

/**
 * Resolve all issues labels actions into single static class.
 *
 * @export
 * @class IssuesFieldsActions
 * @typedef {IssuesFieldsActions}
 */
export class RouterActions {
  static get navigateByUrl() {
    return navigateByUrl;
  }
}

export type RouterTypeActions = typeof routerActions;
