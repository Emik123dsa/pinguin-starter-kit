import { Version } from '@angular/core';
import { ActionReducer, createReducer } from '@ngrx/store';

import { VERSION } from '../../version';

export const versionReducer: ActionReducer<Version> =
  createReducer<Version>(VERSION);
