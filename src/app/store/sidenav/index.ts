import { Action } from '@ngrx/store';
import { Sidenav } from '../../models/sidenav.model';
import { OPEN_SIDENAV, CLOSE_SIDENAV, TRIGGER_SIDENAV } from './constants';

export function sidenavReducer(state: Sidenav = { isActive: true }, action: Action) {
  switch (action.type) {
    case OPEN_SIDENAV:
      return { isActive: true };

    case CLOSE_SIDENAV:
      return { isActive: false };

    case TRIGGER_SIDENAV:
      const val = !state.isActive;
      return { isActive: val };

    default:
      return state;
  }
}
