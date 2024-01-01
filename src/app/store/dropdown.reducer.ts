import { createReducer, on } from '@ngrx/store';
import { setOptions, filterOptions } from './dropdown.actions';

export interface DropdownState {
  options: string[];
  filteredOptions: string[];
}

export const initialState: DropdownState = {
  options: [],
  filteredOptions: [],
};

export const dropdownReducer = createReducer(
  initialState,
  on(setOptions, (state, { options }) => ({
    ...state,
    options,
    filteredOptions: options,
  })),
  on(filterOptions, (state, { filterText }) => ({
    ...state,
    filteredOptions: state.options.filter((option) =>
      option.toLowerCase().includes(filterText.toLowerCase())
    ),
  }))
);
