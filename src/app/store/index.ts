import { ActionReducerMap } from '@ngrx/store';
import { dropdownReducer, DropdownState } from './dropdown.reducer';

export interface AppState {
  dropdown: DropdownState;
}

export const reducers: ActionReducerMap<AppState> = {
  dropdown: dropdownReducer,
};
