import { Action } from '@ngrx/store';
import { Sidenav } from '../../models/sidenav.model';

export const OPEN = 'OPEN';
export const CLOSE = 'DECREMENT';
export const TRIGGER = 'TRIGGER';

export function sidenavReducer(state: Sidenav = { isActive: true }, action: Action) {
  switch (action.type) {
    case OPEN:
      return { isActive: true };

    case CLOSE:
      return { isActive: false };

    case TRIGGER:
      const val = !state.isActive;
      return { isActive: val };

    default:
      return state;
  }
}
